import { defineCollection, z } from "astro:content";

const audioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    audioUrl: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    audio: z.number().optional(),
    season: z.number().optional(),
    audioType: z.string().optional(),
    duration: z.coerce.string(), //duration in format hh:mm:ss
    size: z.number(), // size in megabytes
  }),
});

export const collections = {
  audio: audioCollection,
};
