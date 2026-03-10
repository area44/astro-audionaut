import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const audioCollection = defineCollection({
  loader: glob({ base: "./src/content/audio", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    audioUrl: z.string().url(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    audio: z.coerce.number().optional(),
    season: z.coerce.number().optional(),
    audioType: z.string().optional(),
    duration: z.string().regex(/^\d{2}:\d{2}:\d{2}$/),
    size: z.coerce.number(),
  }),
});

export const collections = { audioCollection };
