import { validateEmail } from './common-rules';
import { z } from 'zod';

// form zod validation schema
export const forgetPasswordSchema = z.object({
  email: validateEmail,
});

// generate form types from zod validation schema
export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
