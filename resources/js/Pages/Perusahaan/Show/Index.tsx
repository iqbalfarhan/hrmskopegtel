import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Perusahaan } from '@/types/perusahaan';
import { FC } from 'react';
import PerusahaanMembers from './Partials/PerusahaanMembers';

type ShowPerusahaanProps = {
  perusahaan: Perusahaan;
};

const ShowPerusahaan: FC<ShowPerusahaanProps> = ({ perusahaan }) => {
  return (
    <Authenticated header="Detail perusahaan">
      <Tabs defaultValue="information">
        <TabsList>
          <TabsTrigger value="information">Informasi</TabsTrigger>
          <TabsTrigger value="karyawan">Karyawan</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          dicta! Ex, inventore? Adipisci veniam, et quisquam quaerat eveniet
          dolorem nesciunt dignissimos tempora laboriosam corporis fugiat,
          inventore fugit! Minus, impedit suscipit?
        </TabsContent>
        <TabsContent value="karyawan">
          <PerusahaanMembers users={perusahaan.users} />
        </TabsContent>
      </Tabs>
    </Authenticated>
  );
};

export default ShowPerusahaan;
