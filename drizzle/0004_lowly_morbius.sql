CREATE TABLE "ministries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"icon" varchar(256),
	"created_at" timestamp DEFAULT now()
);
