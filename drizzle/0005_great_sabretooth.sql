CREATE TABLE "leaders" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"phone_number" varchar(256),
	"email" varchar(256),
	"gender" varchar(256),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "ministries" DROP COLUMN "created_at";