import { Request, Response } from "express";
import prisma from "../server/prisma";
import { createScheduleSchema, editScheduleSchema } from "../schemas/Schedule";

export const createSchedule = async (req: Request, res: Response) => {
  const result = createScheduleSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;
  try {
    const newSchedule = await prisma.schedule.create({
      data: {
        type: data.type,
        hours: data.hours,
        movie: { connect: { id: data.movieId } },
      },
    });
    if (newSchedule) {
      return res.status(200).json({ message: "Horarios creados" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getOneSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const schedule = await prisma.schedule.findFirst({
      where: {
        id,
      },
      include: {
        movie: true,
      },
    });
    if (!schedule) {
      return res.status(404).json({ error: "No se encontro el horario" });
    }
    return res.status(200).json(schedule);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllSchedule = async (req: Request, res: Response) => {
  try {
    const schedules = await prisma.schedule.findMany({});
    if (!schedules) {
      return res.status(404).json({ error: "Sin horarios" });
    }
    return res.status(200).json(schedules);
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = editScheduleSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid input",
      details: result.error.errors,
    });
  }

  const data = result.data;

  try {
    const scheduleUpdated = await prisma.schedule.update({
      where: {
        id,
      },
      data: {
        hours: data.hours,
        type: data.type,
        ...(result.data.movieId && {
          movie: {
            connect: { id: data.movieId },
          },
        }),
      },
    });
    if (scheduleUpdated) {
      return res.status(200).json({ message: "Exito al guardar" });
    }
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.schedule.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Horarios eliminados" });
  } catch (err) {
    console.error("Error executing query", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
