import { Absensi } from './absensi';
import { Role } from './permission';
import { Perusahaan } from './perusahaan';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  perusahaan_id?: Perusahaan['id'];
  photo?: string;
  roles?: Role[];
  absensis?: Absensi[];
  perusahaan?: Perusahaan;
  email_verified_at?: string;
};
