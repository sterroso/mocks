import { Router } from "express";
import * as FakeProductController from "../controllers/fakeProduct.controller.js";

const router = Router();

router.get("/", FakeProductController.getFakeProducts);

router.get("/:count", FakeProductController.getFakeProducts);

export default router;
