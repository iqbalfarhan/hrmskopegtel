import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { User } from '@/types/user';
import { Link } from '@inertiajs/react';
import { Download } from 'lucide-react';
import { FC } from 'react';
import AbsensiLogs from './Partials/AbsensiLogs';
import UserInfo from './Partials/UserInfo';

type ShowUserProps = {
  user: User;
};

const ShowUser: FC<ShowUserProps> = ({ user }) => {
  return (
    <Authenticated
      header="User Detail"
      actions={
        <>
          <Button asChild>
            <Link href={route('user.edit', user.id)}>Edit user</Link>
          </Button>
          <Button variant={'default'}>
            <Download />
            Downlad info
          </Button>
        </>
      }
    >
      <Tabs defaultValue="information">
        <TabsList>
          <TabsTrigger value="information">Detail karyawan</TabsTrigger>
          <TabsTrigger value="absensiLogs">Riwayat absensi</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <UserInfo user={user} />
        </TabsContent>
        <TabsContent value="absensiLogs">
          <AbsensiLogs absensis={user.absensis} />
        </TabsContent>
      </Tabs>
    </Authenticated>
  );
};

export default ShowUser;
