import { z } from 'zod';

// form zod validation schema
export const onmloginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

// generate form types from zod validation schema
export type OnmLoginSchema = z.infer<typeof onmloginSchema>;
