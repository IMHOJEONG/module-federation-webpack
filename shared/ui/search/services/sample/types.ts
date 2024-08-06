import z from "zod";

export type UserReq = {
  id: string;
  pw: string;
};

export const UserResp = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: z.object({
    id: z.string(),
    role: z.string(),
  })
});

export type UserResp = z.infer<typeof UserResp>;

export const RefreshResp = z.object({
  accessToken: z.string(),
  refreshToken: z.string().nullish(),
});

export type RefreshReq = {
  refreshToken: string;
}

export type RefreshResp = z.infer<typeof RefreshResp>;

export const DataResp = z.object({
  data: z.string(),
});

export type DataResp = z.infer<typeof DataResp>;

export type PostDataReq = {
  data: string;
}
