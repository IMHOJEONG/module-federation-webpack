import { z } from 'zod';

export const createServiceListSchema = z.object({
  svcCode: z.string().min(1, { message: '서비스 코드는 필수 입력입니다.' }),
  svc_name: z.string().min(1, { message: '서비스 이름은 필수 입력입니다.' }),
  svcSign: z.string().min(1, { message: '서비스 신호는 필수 입력입니다.' }),
  svcCategory: z.enum(['유선', '무선'], {
    message: '서비스 카테고리는 필수 입력입니다.',
  }),
  svgUsageCategory: z.enum(['채널검색', '통합검색'], {
    message: '서비스 사용 카테고리는 필수 입력입니다.',
  }),
});

export type CreateServiceListInput = z.infer<typeof createServiceListSchema>;
