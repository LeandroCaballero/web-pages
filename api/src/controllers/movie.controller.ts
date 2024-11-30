import { Request, Response } from "express";
import prisma from "../server/prisma";
import { createMovieSchema, editMovieSchema } from "../schemas/Movie";

export const createMovie = async (req: Request, res: Response) => {
  console.log("req.body", req.body);
  return;
  const result = createMovieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;

  try {
    const newMovie = await prisma.movie.create({
      data: {
        name: data.name,
        description: data.description,
        actors: data.actors,
        director: data.director,
        genre: data.genre,
        location: data.location, // sacar
        duration: data.duration,
        image: data.image,
        videoImage: data.videoImage,
        videoUrl: data.videoUrl,
        cinemas: { connect: data.cinemas.map((cinema) => ({ id: cinema })) },
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

export const getOneMovie = async (req: Request, res: Response) => {
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
      return res.status(404).json({ error: "No se encontro la pelicula" });
    }
    return res.status(200).json(movie);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllMovie = async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany({
      // select: {
      //   id: true,
      //   name: true,
      // },
    });
    if (!movies) {
      return res.status(404).json({ error: "Sin pelis" });
    }
    return res.status(200).json(movies);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = editMovieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;

  try {
    const movieUpdated = await prisma.movie.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
        actors: data.actors,
        director: data.director,
        genre: data.genre,
        location: data.location,
        duration: data.duration,
        image: data.image,
        videoImage: data.videoImage,
        videoUrl: data.videoUrl,
        ...(result.data.cinemas && {
          cinemas: {
            connect: result.data.cinemas.map((cinema) => ({ id: cinema })),
          },
        }),
        ...(result.data.schedules && {
          schedules: {
            connect: result.data.schedules.map((schedule) => ({
              id: schedule,
            })),
          },
        }),
      },
    });
    if (movieUpdated) {
      return res.status(200).json({ message: "Exito al guardar" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.movie.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Película eliminada" });
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
