import { User } from './user';

export type Perusahaan = {
  id: number;
  name: string;
  email: string;
  phone: string;
  logo: string;
  photo: string;
  address: string;
  users?: User[];
};
