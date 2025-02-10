import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Absensi } from '@/types/absensi';
import { Head, usePage } from '@inertiajs/react';
import UserInfo from '../User/Show/Partials/UserInfo';
import KaryawanHome from './Partials/KaryawanHome';
import SuperadminHome from './Partials/SuperadminHome';

export default function Dashboard({ absensi }: { absensi: Absensi }) {
  const { user, role } = usePage().props.auth;

  return (
    <Authenticated header="Dashboard">
      <Head title="Dashboard" />

      <UserInfo user={user} />

      {role === 'superadmin' && <SuperadminHome />}
      {role === 'karyawan' && <KaryawanHome absensi={absensi} />}
    </Authenticated>
  );
}
