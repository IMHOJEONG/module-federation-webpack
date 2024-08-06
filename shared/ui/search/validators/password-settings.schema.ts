import {
  validatePassword,
  validateNewPassword,
  validateConfirmPassword,
} from './common-rules';
import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const passwordFormSchema = z
  .object({
    currentPassword: validatePassword,
    newPassword: validateNewPassword,
    confirmedPassword: validateConfirmPassword,
  })
  .refine((data) => data.newPassword === data.confirmedPassword, {
    message: messages.passwordsDidNotMatch,
    path: ['confirmedPassword'], // Correct path for the confirmedPassword field
  });

// generate form types from zod validation schema
export type PasswordFormTypes = z.infer<typeof passwordFormSchema>;
