import { validateEmail } from './common-rules';
import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createUserSchema = z.object({
  fullName: z.string().min(1, { message: messages.fullNameIsRequired }),
  email: validateEmail,
  role: z.string().min(1, { message: messages.roleIsRequired }),
  permissions: z.string().min(1, { message: messages.permissionIsRequired }),
  status: z.string().min(1, { message: messages.statusIsRequired }),
});

// generate form types from zod validation schema
export type CreateUserInput = z.infer<typeof createUserSchema>;
