import { Response, Request } from "express";
import { createDevotional } from "../use-cases/create-devotional.use-case";
import { findDevotionalByDate } from "../use-cases/find-devotional.use-case";
import { ConsoleLogWriter } from "drizzle-orm";

export const DevotionalController = {
  create: async (req: Request, res: Response) => {
    try {
      const devotional = await createDevotional(req.body);
      return res.status(201).json(devotional);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  },
  findByDate: async (req: Request, res: Response) => {
    try {
      const { created_at } = req.query;

      if (
        !created_at ||
        typeof created_at !== "string" ||
        isNaN(Date.parse(created_at))
      ) {
        return res
          .status(400)
          .json({ error: "Invalid or missing 'created_at' query parameter" });
      }

      const devotional = await findDevotionalByDate({
        created_at: new Date(created_at),
      });
      return res.status(200).json(devotional);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  },
};
