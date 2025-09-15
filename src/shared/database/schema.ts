import { relations } from "drizzle-orm";
import {
  pgTable,
  varchar,
  serial,
  text,
  timestamp,
  integer,
  date,
} from "drizzle-orm/pg-core";

export const devotionals = pgTable("devotionals", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  content: text("content").notNull(),
  imageUrl: varchar("image_url", { length: 256 }),
  created_at: timestamp("created_at").defaultNow(),
});

export const notices = pgTable("notices", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  content: text("content").notNull(),
  imageUrl: varchar("image_url", { length: 256 }),
  created_at: timestamp("created_at").defaultNow(),
});

export const ministries = pgTable("ministries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description").notNull(),
  icon: varchar("icon", { length: 256 }),
});

export const leaders = pgTable("leaders", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 256 }),
  email: varchar("email", { length: 256 }),
  gender: varchar("gender", { length: 256 }),
  created_at: timestamp("created_at").defaultNow(),
});

export const ministriesRelations = relations(ministries, ({ many }) => ({
  ministriesToLeaders: many(ministriesToLeaders),
}));

export const leadersRelations = relations(leaders, ({ many }) => ({
  ministriesToLeaders: many(ministriesToLeaders),
}));

export const ministriesToLeaders = pgTable("ministries_to_leaders", {
  id: serial("id").primaryKey(),
  ministryId: integer("ministry_id")
    .notNull()
    .references(() => ministries.id),
  leaderId: integer("leader_id")
    .notNull()
    .references(() => leaders.id),
});

export const ministriesToLeadersRelations = relations(
  ministriesToLeaders,
  ({ one }) => ({
    ministry: one(ministries, {
      fields: [ministriesToLeaders.ministryId],
      references: [ministries.id],
    }),
    leader: one(leaders, {
      fields: [ministriesToLeaders.leaderId],
      references: [leaders.id],
    }),
  })
);

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  startTime: varchar("start_time", { length: 256 }).notNull(),
  endTime: varchar("end_time", { length: 256 }).notNull(),
  imageUrl: varchar("image_url", { length: 256 }),

  created_at: timestamp("created_at").defaultNow(),
});
