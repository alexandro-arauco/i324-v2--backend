import { Router } from "express";
import { LeaderController } from "../../leaders/controllers/leader.controller";

const router = Router();

router.get("/", LeaderController.list);
router.post("/", LeaderController.create);

export default router;
