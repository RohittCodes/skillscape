import { pgTable, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
});
