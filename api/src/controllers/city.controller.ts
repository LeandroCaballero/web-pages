import { Request, Response } from "express";
import prisma from "../server/prisma";
import { createCitySchema, editCitySchema } from "../schemas/City";

export const createCity = async (req: Request, res: Response) => {
  const result = createCitySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;
  try {
    const newCity = await prisma.city.create({
      data: {
        name: data.name,
      },
    });
    if (newCity) {
      return res.status(200).json({ message: "Ciudad creada" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getOneCity = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const city = await prisma.city.findFirst({
      where: {
        id,
      },
      include: {
        cinemas: true,
      },
    });
    if (!city) {
      return res.status(404).json({ error: "No se encontro la ciudad" });
    }
    return res.status(200).json(city);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllCity = async (req: Request, res: Response) => {
  try {
    const cities = await prisma.city.findMany({});
    if (!cities) {
      return res.status(404).json({ error: "Sin ciudades" });
    }
    return res.status(200).json(cities);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateCity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = editCitySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;

  try {
    const cityUpdated = await prisma.city.update({
      where: {
        id,
      },
      data: {
        name: data.name,
      },
    });
    if (cityUpdated) {
      return res.status(200).json({ message: "Exito al guardar" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCity = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.city.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Ciudad eliminada" });
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
