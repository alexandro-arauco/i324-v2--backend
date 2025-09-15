import { Request, Response } from "express";
import { createMinistry } from "../../ministries/use-cases/create-ministry.use-case";
import { listMinistries } from "../../ministries/use-cases/list-ministries.use-case";

export const MinistryController = {
  create: async (req: Request, res: Response) => {
    const ministry = await createMinistry(req.body);
    return res.status(201).json(ministry);
  },
  list: async (req: Request, res: Response) => {
    try {
      const { page = 1, itemsPerPage = 10 } = req.query;

      const ministries = await listMinistries(
        Number(page),
        Number(itemsPerPage)
      );

      const result = {
        data: ministries.items,
        pagination: {
          currentPage: Number(page),
          itemsPerPage: Number(itemsPerPage),
          totalItems: ministries.total,
          totalPages: Math.ceil(ministries.total / Number(itemsPerPage)),
        },
      };

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  },
};
