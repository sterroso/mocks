import { Router } from "express";
import * as FakeImageUrlController from "../controllers/fakeImageUrl.controller.js";

const router = Router();

router.get("/", FakeImageUrlController.getFakeImageUrls);

router.get("/:count", FakeImageUrlController.getFakeImageUrls);

export default router;
