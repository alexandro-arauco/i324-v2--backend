import { Request, Response } from "express";
import { createLeader } from "../../leaders/use-cases/create-leader.use-case";
import { listLeaders } from "../../leaders/use-cases/list-leaders.use-case";

export const LeaderController = {
  create: async (req: Request, res: Response) => {
    const leader = await createLeader(req.body);
    return res.status(201).json(leader);
  },
  list: async (req: Request, res: Response) => {
    try {
      const { page = 1, itemsPerPage = 10 } = req.query;

      const leaders = await listLeaders(Number(page), Number(itemsPerPage));

      const result = {
        data: leaders.items,
        pagination: {
          currentPage: Number(page),
          itemsPerPage: Number(itemsPerPage),
          totalItems: leaders.total,
          totalPages: Math.ceil(leaders.total / Number(itemsPerPage)),
        },
      };

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  },
};
