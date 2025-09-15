import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import devotionalRoutes from "../src/devotionals/routes/devotional.routes";
import noticeRoutes from "../src/notices/routes/notice.routes";
import ministryRoutes from "../src/ministries/routes/ministry.routes";
import leaderRoutes from "../src/leaders/routes/leader.routes";

dotenv.config();

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/devotionals", devotionalRoutes);
app.use("/notices", noticeRoutes);
app.use("/ministries", ministryRoutes);
app.use("/leaders", leaderRoutes);

app.get("/", (_, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
