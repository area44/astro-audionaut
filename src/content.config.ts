import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const audioCollection = defineCollection({
  loader: glob({ base: './src/content/audio', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    audioUrl: z.url(),
    date: z.date(),
    cover: z.string().optional(),
    audio: z.number().optional(),
    season: z.number().optional(),
    audioType: z.string().optional(),
    duration: z.string().regex(/^\d{2}:\d{2}:\d{2}$/),
    size: z.number(),
  }),
});

export const collections = { audioCollection };
