import { Router } from "express";
import { NoticeController } from "../controllers/notice.controller";

const router = Router();


router.get("/", NoticeController.list);
router.post("/", NoticeController.create);

export default router;
