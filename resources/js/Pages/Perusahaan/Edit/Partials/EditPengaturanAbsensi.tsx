import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Perusahaan } from '@/types/perusahaan';
import { useForm } from '@inertiajs/react';

const EditPengaturanAbsensi = ({ perusahaan }: { perusahaan: Perusahaan }) => {
  const { data } = useForm({
    perusahaan_id: perusahaan.id,
    masuk: '08:00',
    pulang: '17:00',
    toleransi_terlambat: '0',
  });
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Halaman ini digunakan untuk keperluan absensi untuk menentukan status
          keterlambatan karyawan saat absensi
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormControl label="Jam masuk" horizontal>
          <Input className="col-span-3" defaultValue={data.masuk} />
        </FormControl>
        <FormControl label="Jam pulang" horizontal>
          <Input className="col-span-3" defaultValue={data.pulang} />
        </FormControl>
        <FormControl label="Toleransi waktu terlambat" horizontal>
          <Input
            className="col-span-3"
            defaultValue={data.toleransi_terlambat}
            placeholder="kosongkan bila tidak ada toleransi terlambat"
          />
        </FormControl>
      </CardContent>
      <CardFooter>
        <FormControl horizontal>
          <div>
            <Button>Simpan</Button>
          </div>
        </FormControl>
      </CardFooter>
    </Card>
  );
};

export default EditPengaturanAbsensi;
