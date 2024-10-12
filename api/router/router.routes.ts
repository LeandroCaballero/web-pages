import { Router } from "express";
import { login, register } from "../src/controllers/auth.controller.js";
// import {
//   addMember,
//   create as createHouse,
//   deleteMember,
//   getAllByOwner,
//   getOne as getOneHouse,
// } from "../src/controllers/house.controller.js";

const router = Router();

// Auth
router.post("/login", login);
router.post("/register", register);

// House
// router.get("/house/:id", getOneHouse);
// router.get("/house/owner/:id", getAllByOwner);
// router.get("/house/owner/:id", getAllByOwner);
// router.post("/house", createHouse);
// router.post("/house/addMember", addMember);
// router.delete("/house/deleteMember", deleteMember);

export default router;
