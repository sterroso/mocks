import { Router } from "express";
import * as FakeUserController from "../controllers/fakeUser.controller.js";

const router = Router();

router.get("/", FakeUserController.getFakeUsers);

router.get("/:count", FakeUserController.getFakeUsers);

export default router;
