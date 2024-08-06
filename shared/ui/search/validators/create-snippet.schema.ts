import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createSnippetSchema = z.object({
  name: z.string().min(1, { message: messages.snippetNameIsRequired }),
  folder: z
    .string({
      required_error: messages.snippetDirIsRequired,
    })
    .min(1, { message: messages.snippetDirIsRequired }),
  snippet: z.string().optional(),
  template: z.string().optional(),
});

// generate form types from zod validation schema
export type CreateSnippetInput = z.infer<typeof createSnippetSchema>;
