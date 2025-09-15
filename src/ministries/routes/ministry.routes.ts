import { Router } from "express";
import { MinistryController } from "../../ministries/controllers/ministry.controller";

const router = Router();

router.get("/", MinistryController.list);
router.post("/", MinistryController.create);

export default router;
