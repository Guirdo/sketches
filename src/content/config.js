import { z,defineCollection } from 'astro:content';

const sketchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  'sketch': sketchCollection,
};