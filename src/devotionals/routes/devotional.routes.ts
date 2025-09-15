import { Router } from "express";
import { DevotionalController } from "../controllers/devotional.controller";

const router = Router();

router.post("/", DevotionalController.create);
router.get("/", DevotionalController.findByDate);

export default router;
