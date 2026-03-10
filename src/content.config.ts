import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const audioCollection = defineCollection({
  loader: glob({ base: "./src/content/audio", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    audioUrl: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    audio: z.number().optional(),
    season: z.number().optional(),
    audioType: z.string().optional(),
    duration: z.coerce
      .string()
      .regex(
        /^(\d{1,2}:)?\d{1,2}:\d{2}$/,
        "Invalid duration format (MM:SS or HH:MM:SS)"
      ),
    size: z.coerce.number(),
  }),
});

export const collections = { audioCollection };
