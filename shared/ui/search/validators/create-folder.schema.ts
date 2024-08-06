import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createFolderSchema = z.object({
  name: z
    .string()
    .min(1, { message: messages.folderNameIsRequired })
    .min(3, { message: messages.folderNameLengthMin }),
});

// generate form types from zod validation schema
export type CreateFolderInput = z.infer<typeof createFolderSchema>;
