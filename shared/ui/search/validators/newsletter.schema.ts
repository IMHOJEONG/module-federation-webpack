import { validateEmail } from './common-rules';
import { z } from 'zod';

// form zod validation schema
export const newsLetterFormSchema = z.object({
  email: validateEmail,
});

// generate form types from zod validation schema
export type NewsLetterFormSchema = z.infer<typeof newsLetterFormSchema>;
