import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Perusahaan } from '@/types/perusahaan';
import EditInformasiPerusahaan from './Partials/EditInformasiPerusahaan';
import EditPengaturanAbsensi from './Partials/EditPengaturanAbsensi';

const Index = ({ perusahaan }: { perusahaan: Perusahaan }) => {
  return (
    <Authenticated header="Edit perusahaan">
      <Tabs defaultValue="informasi">
        <TabsList>
          <TabsTrigger value="informasi">Informasi</TabsTrigger>
          <TabsTrigger value="absensi">Jam operasional</TabsTrigger>
        </TabsList>
        <TabsContent value="informasi">
          <EditInformasiPerusahaan perusahaan={perusahaan} />
        </TabsContent>
        <TabsContent value="absensi">
          <EditPengaturanAbsensi perusahaan={perusahaan} />
        </TabsContent>
      </Tabs>
    </Authenticated>
  );
};

export default Index;
