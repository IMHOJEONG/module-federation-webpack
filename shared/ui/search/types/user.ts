// user
export type TUser = {
  id: string;
  email: string;
  role: TUserRole;
  accessToken?: string;
  refreshToken?: string;
};

// user roles
const UserRoleKeys = ['ROLE_GUEST', 'ROLE_ADMIN'] as const;

export type TUserRole = (typeof UserRoleKeys)[number];
export type TUserRecord = Record<TUserRole, TUserRole>;

export const UserRoleRecord: TUserRecord = UserRoleKeys.reduce((a, c) => {
  a[c] = c;
  return a;
}, {} as TUserRecord);
