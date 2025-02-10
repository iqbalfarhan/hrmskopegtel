import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { User } from '@/types/user';
import { Link } from '@inertiajs/react';
import { PencilLine } from 'lucide-react';
import { FC } from 'react';
import AbsensiChart from './Partials/AbsensiChart';
import PerusahaanInfo from './Partials/PerusahaanInfo';
import PerusahaanMembers from './Partials/PerusahaanMembers';

type ShowPerusahaanProps = {
  perusahaan: Perusahaan;
  users: User[];
  roles: Role[];
};

const ShowPerusahaan: FC<ShowPerusahaanProps> = ({
  perusahaan,
  users,
  roles,
}) => {
  return (
    <Authenticated
      header="Detail perusahaan"
      actions={
        <>
          <Button asChild>
            <Link href={route('perusahaan.edit', perusahaan.id)}>
              <PencilLine />
              Edit perusahaan
            </Link>
          </Button>
        </>
      }
    >
      <Tabs defaultValue="information">
        <TabsList>
          <TabsTrigger value="information">Informasi</TabsTrigger>
          <TabsTrigger value="karyawan">Karyawan</TabsTrigger>
          <TabsTrigger value="absensi">Absensi</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <PerusahaanInfo perusahaan={perusahaan} />
        </TabsContent>
        <TabsContent value="karyawan">
          <PerusahaanMembers
            users={users}
            perusahaan={perusahaan}
            roles={roles}
          />
        </TabsContent>
        <TabsContent value="absensi">
          <AbsensiChart />
        </TabsContent>
      </Tabs>
    </Authenticated>
  );
};

export default ShowPerusahaan;
