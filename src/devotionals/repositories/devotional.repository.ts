import { sql } from "drizzle-orm";
import { db } from "../../shared/database/connection";
import { devotionals } from "../../shared/database/schema";
import { Devotional } from "../entities/devotional.entity";

export const DevotionalRepository = {
  create: async (props: Devotional) => {
    const [created] = await db
      .insert(devotionals)
      .values({ ...props })
      .returning();

    return created;
  },
  findByDate: async (query: { created_at: Date }) => {
    const [devotional] = await db
      .select()
      .from(devotionals)
      .where(sql`DATE(${devotionals.created_at}) = DATE(${query.created_at})`);

    return devotional;
  },
};
