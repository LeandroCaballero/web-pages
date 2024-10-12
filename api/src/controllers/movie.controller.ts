import { Request, Response } from "express";
import prisma from "../server/prisma";
import { movieSchema } from "../schemas/movie";

export const create = async (req: Request, res: Response) => {
  const result = movieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const {
    name,
    description,
    actors,
    cinemas,
    director,
    genre,
    location,
    duration,
    image,
    schedules,
    videoImage,
    videoUrl,
  } = result.data;

  try {
    const newMovie = await prisma.movie.create({
      data: {
        name,
        description,
        actors,
        cinemas: { connect: cinemas.map((cinema) => ({ id: cinema })) },
        director,
        genre,
        location,
        duration,
        image,
        schedules: { connect: schedules.map((schedule) => ({ id: schedule })) },
        videoImage,
        videoUrl,
      },
    });
    if (newMovie) {
      return res.status(200).json({ message: "Pelicula creada" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movie = await prisma.movie.findFirst({
      where: {
        id,
      },
      include: {
        cinemas: true,
        schedules: true,
      },
    });
    if (!movie) {
      return res.status(404).json({ error: "No se encontro la peli" });
    }
    return res.status(200).json(movie);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany({});
    if (!movies) {
      return res.status(404).json({ error: "Sin pelis" });
    }
    return res.status(200).json(movies);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = movieSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }
  try {
    const movieUpdated = await prisma.movie.update({
      where: {
        id,
      },
      data: result.data,
    });
    if (movieUpdated) {
      return res.status(200).json({ message: "Exit" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export const deleteMember = async (req: Request, res: Response) => {
//   const { idHouse, idMember } = req.body;
//   try {
//     const newMember = await prisma.house.update({
//       where: {
//         id: idHouse,
//       },
//       data: {
//         members: { disconnect: { id: idMember } },
//       },
//     });

//     if (newMember) {
//       return res.status(200).json({ message: "Miembro eliminado" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };
