CREATE TABLE "ministries_to_leaders" (
	"id" serial PRIMARY KEY NOT NULL,
	"ministry_id" integer NOT NULL,
	"leader_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ministries_to_leaders" ADD CONSTRAINT "ministries_to_leaders_ministry_id_ministries_id_fk" FOREIGN KEY ("ministry_id") REFERENCES "public"."ministries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ministries_to_leaders" ADD CONSTRAINT "ministries_to_leaders_leader_id_leaders_id_fk" FOREIGN KEY ("leader_id") REFERENCES "public"."leaders"("id") ON DELETE no action ON UPDATE no action;