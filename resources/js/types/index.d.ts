import { User } from './user';

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
    permissions: string[];
    role: string;
  };
};
