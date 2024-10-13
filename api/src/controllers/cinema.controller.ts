import { Request, Response } from "express";
import prisma from "../server/prisma";
import { createCinemaSchema, editCinemaSchema } from "../schemas/Cinema";

export const create = async (req: Request, res: Response) => {
  const result = createCinemaSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;
  try {
    const newCinema = await prisma.cinema.create({
      data: {
        name: data.name,
        location: data.location,
      },
    });
    if (newCinema) {
      return res.status(200).json({ message: "Cine creado" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cinema = await prisma.cinema.findFirst({
      where: {
        id,
      },
      include: {
        cities: true,
        movies: true,
      },
    });
    if (!cinema) {
      return res.status(404).json({ error: "No se encontro el cine" });
    }
    return res.status(200).json(cinema);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const cinemas = await prisma.cinema.findMany({});
    if (!cinemas) {
      return res.status(404).json({ error: "Sin cines" });
    }
    return res.status(200).json(cinemas);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = editCinemaSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;

  try {
    const cinemaUpdated = await prisma.cinema.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        location: data.location,
      },
    });
    if (cinemaUpdated) {
      return res.status(200).json({ message: "Exito al guardar" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCinema = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.cinema.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Cine eliminado" });
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
