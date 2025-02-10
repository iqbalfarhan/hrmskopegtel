import { User } from './user';

export type Absensi = {
  id: number;
  user_id: number;
  tanggal: Date;
  checkin: DateTime;
  checkout: DateTime;
  approved: boolean;
  completed: boolean;
  terlambat: boolean;
  user?: User;
};
