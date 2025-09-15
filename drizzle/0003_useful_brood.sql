CREATE TABLE "notices" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"content" text NOT NULL,
	"image_url" varchar(256),
	"created_at" timestamp DEFAULT now()
);
