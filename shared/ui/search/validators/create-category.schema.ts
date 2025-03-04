import { messages } from '@/config/messages';
import { fileSchema } from './common-rules';
import { z } from 'zod';

// form zod validation schema
export const categoryFormSchema = z.object({
  name: z.string().min(1, { message: messages.catNameIsRequired }),
  slug: z.string().min(1, { message: messages.slugIsRequired }),
  type: z.string().optional(),
  parentCategory: z.string().optional(),
  description: z.string().optional(),
  images: z.array(fileSchema).optional(),
});

// generate form types from zod validation schema
export type CategoryFormInput = z.infer<typeof categoryFormSchema>;
