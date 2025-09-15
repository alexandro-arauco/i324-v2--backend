import { Notice } from "../entities/notice.entity";
import { db } from "../../shared/database/connection";
import { notices } from "../../shared/database/schema";

export const NoticeRepository = {
  create: async (props: Notice) => {
    const [created] = await db
      .insert(notices)
      .values({ ...props })
      .returning();

    return created;
  },
  list: async (page: number, itemsPerPage: number) => {
    const total = (await db.select().from(notices)).length;

    const offset = (page - 1) * itemsPerPage;

    const data = await db
      .select()
      .from(notices)
      .limit(itemsPerPage)
      .offset(offset);

    return {
      items: data,
      total,
    };
  },
};
