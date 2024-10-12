import { Request, Response } from "express";
import prisma from "../server/prisma";

export const create = async (req: Request, res: Response) => {
  const { name, idMember } = req.body;
  try {
    const newHouse = await prisma.house.create({
      data: {
        name,
        owner: { connect: { id: idMember } },
      },
    });

    if (newHouse) {
      return res.status(200).json({ message: "Hogar creado" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const house = await prisma.house.findFirst({
      where: {
        id,
      },
      include: {
        owner: true,
        members: true,
      },
    });

    if (!house) {
      return res.status(404).json({ error: "No se encontro la casa" });
    }

    return res.status(200).json(house);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllByOwner = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const houses = await prisma.house.findMany({
      where: {
        owner: {
          id,
        },
      },
    });

    if (!houses) {
      return res.status(404).json({ error: "Sin casas" });
    }

    return res.status(200).json(houses);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const addMember = async (req: Request, res: Response) => {
  const { idHouse, idMember } = req.body;
  try {
    const newMember = await prisma.house.update({
      where: {
        id: idHouse,
      },
      data: {
        members: { connect: { id: idMember } },
      },
    });

    if (newMember) {
      return res.status(200).json({ message: "Miembro agregado" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  const { idHouse, idMember } = req.body;
  try {
    const newMember = await prisma.house.update({
      where: {
        id: idHouse,
      },
      data: {
        members: { disconnect: { id: idMember } },
      },
    });

    if (newMember) {
      return res.status(200).json({ message: "Miembro eliminado" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
