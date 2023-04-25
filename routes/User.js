import express from "express";
import {
  User1Controller,
  User2Controller,
  User3Controller,
  User4Controller,
  User5Controller,
} from "../controllers/UserController.js";
const router = express.Router();

//For 1st Condition
router.get("/users1", User1Controller);

//For 2nd Condition

router.get("/users2", User2Controller);

//For 3rd Condition

router.get("/users3", User3Controller);

//For 4th Condition

router.get("/users4", User4Controller);

//For 5th Condition

router.get("/users/top-cities", User5Controller);
export default router;
