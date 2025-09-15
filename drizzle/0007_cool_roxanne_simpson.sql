CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"address" varchar(256) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"start_time" varchar(256) NOT NULL,
	"end_time" varchar(256) NOT NULL,
	"image_url" varchar(256),
	"created_at" timestamp DEFAULT now()
);
