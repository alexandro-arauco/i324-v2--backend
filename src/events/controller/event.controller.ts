import { Request, Response } from "express";
import { createEvent } from "../../events/use-cases/create-event.use-case";
import { listEvents } from "../../events/use-cases/list-events.use-case";

export const EventController = {
  create: async (req: Request, res: Response) => {
    const event = await createEvent(req.body);
    return res.status(201).json(event);
  },
  list: async (req: Request, res: Response) => {
    try {
      const { page = 1, itemsPerPage = 10 } = req.query;
      const events = await listEvents(Number(page), Number(itemsPerPage));

      const result = {
        data: events.items,
        pagination: {
          currentPage: Number(page),
          itemsPerPage: Number(itemsPerPage),
          totalItems: events.total,
          totalPages: Math.ceil(events.total / Number(itemsPerPage)),
        },
      };

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  },
};
