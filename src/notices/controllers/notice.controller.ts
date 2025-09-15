import { Request, Response } from "express";

import { createNotice } from "../use-cases/create-notice.use-case";
import { listNotices } from "../use-cases/list-notices.use-case";

export const NoticeController = {
  create: async (req: Request, res: Response) => {
    try {
      const notice = await createNotice(req.body);
      return res.status(201).json(notice);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  },
  list: async (req: Request, res: Response) => {
    try {
      const { page = 1, itemsPerPage = 10 } = req.query;

      const notices = await listNotices(Number(page), Number(itemsPerPage));

      const result = {
        data: notices.items,
        pagination: {
          currentPage: Number(page),
          itemsPerPage: Number(itemsPerPage),
          totalItems: notices.total,
          totalPages: Math.ceil(notices.total / Number(itemsPerPage)),
        },
      };

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  },
};
