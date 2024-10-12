import { Express, Request, Response } from "express";
import prisma from "../server/prisma";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { Resend } from "resend";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!existUser) {
      return res.status(400).json({ error: "No se encontro la cuenta" });
    }

    if (await bcrypt.compare(password, existUser.password)) {
      // if (!existUser.confirmEmail) {
      //   return res.status(403).json({ message: "Su usuario no esta confimado" })
      // }

      const token = jwt.sign(
        { user_id: existUser.id, email },
        process.env.TOKEN_KEY || "",
        {
          expiresIn: "7d",
        }
      );

      res.status(201).json({
        id: existUser.id,
        name: existUser.name,
        email: existUser.email,
        token: token,
      });
    } else {
      res.status(403).json({ message: "Credenciales incorrectas" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const result = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (result) {
      return res.status(400).json({ error: "Email ya registrado" });
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const bytes = crypto.randomBytes(12);
    const token = bytes.toString("hex");

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
        // tokenEmail: token,
      },
    });

    if (newUser) {
      // const resend = new Resend(process.env.RESEND_KEY);
      // resend.emails
      //   .send({
      //     from: "verify@rulodev.online",
      //     to: ["leandrorojo248@gmail.com"],
      //     subject: "Hello World",
      //     html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    }

    return res.status(200).json({ message: "Registro exitoso" });
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const confirmEmail = async (req: Request, res: Response) => {
//   const { id, token } = req.params;

//   const checkInfoUser = await prisma.user.findFirst({
//     where: {
//       id: id,
//       tokenEmail: token,
//     },
//   });

//   //Verify if data is correct and confirmEmail == true
//   if (!checkInfoUser || checkInfoUser.confirmed) {
//     return res.status(409).render("confirmEmailError", {
//       error: "Usuario inexistente o token inválido",
//     });
//   }

//   try {
//     await prisma.user.update({
//       where: {
//         id: checkInfoUser.id,
//       },
//       data: {
//         confirmed: true,
//       },
//     });

//     return res
//       .status(409)
//       .render("confirmEmailSuccess", { name: checkInfoUser.name });
//   } catch (error) {
//     console.log("Error confirmEmail", error);
//     res.status(500).json({ message: "Error en el servidor" });
//   }
// };
