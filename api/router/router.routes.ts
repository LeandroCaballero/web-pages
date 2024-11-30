import { Router } from "express";
import { login, register } from "../src/controllers/auth.controller";
import {
  createMovie,
  getAllMovie,
  getOneMovie,
  deleteMovie,
  updateMovie,
} from "../src/controllers/movie.controller";
import {
  createCity,
  deleteCity,
  getAllCity,
  getOneCity,
  updateCity,
} from "../src/controllers/city.controller";
import {
  createSchedule,
  deleteSchedule,
  getAllSchedule,
  getOneSchedule,
  updateSchedule,
} from "../src/controllers/schedule.controller";
import {
  createCinema,
  deleteCinema,
  getAllCinema,
  getOneCinema,
  updateCinema,
} from "../src/controllers/cinema.controller";

const router = Router();

// Auth
router.post("/login", login);
router.post("/register", register);

// Movies
router.get("/movie", getAllMovie);
router.get("/movie/:id", getOneMovie);
router.post("/movie", createMovie);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

// Cinemas
router.get("/cinema", getAllCinema);
router.get("/cinema/:id", getOneCinema);
router.post("/cinema", createCinema);
router.put("/cinema/:id", updateCinema);
router.delete("/cinema/:id", deleteCinema);

// Schedule
router.get("/schedule", getAllSchedule);
router.get("/schedule/:id", getOneSchedule);
router.post("/schedule", createSchedule);
router.put("/schedule/:id", updateSchedule);
router.delete("/schedule/:id", deleteSchedule);

// City
router.get("/city", getAllCity);
router.get("/city/:id", getOneCity);
router.post("/city", createCity);
router.put("/city/:id", updateCity);
router.delete("/city/:id", deleteCity);

export default router;
