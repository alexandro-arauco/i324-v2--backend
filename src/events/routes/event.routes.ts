import { EventController } from "../../events/controller/event.controller";
import { Router } from "express";

const router = Router();

router.get("/", EventController.list);
router.post("/", EventController.create);

export default router;
