import FormControl from '@/components/app/form-control';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Perusahaan } from '@/types/perusahaan';
import { useForm } from '@inertiajs/react';
import React from 'react';

const EditInformasiPerusahaan = ({
  perusahaan,
}: {
  perusahaan: Perusahaan;
}) => {
  const { toast } = useToast();
  const { data, setData, put } = useForm({
    name: perusahaan.name,
    phone: perusahaan.phone,
    address: perusahaan.address,
    email: perusahaan.email,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    put(route('perusahaan.update', perusahaan.id), {
      onSuccess: () => {
        toast({
          title: 'Berhasil',
          description: 'Data perusahaan berhasil diubah',
        });
      },
      onError: () => {
        toast({
          title: 'Gagal',
          description: 'Data perusahaan berhasil diubah',
          variant: 'destructive',
        });
      },
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse id
          quisquam blanditiis velit, nostrum dolorem optio earum quis ipsum
          illum molestiae ad, sunt tempore, nemo pariatur. Explicabo, ea soluta.
          Quia.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <FormControl label="Logo perusahaan" horizontal>
            <div className="col-span-3 flex gap-2">
              <Avatar>
                <AvatarFallback>DF</AvatarFallback>
              </Avatar>
              <Input type="file" placeholder="Company name" />
            </div>
          </FormControl>
          <FormControl label="Nama perusahaan" horizontal>
            <Input
              placeholder="Company name"
              className="col-span-3"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
          </FormControl>
          <FormControl label="Nomor telepon" horizontal>
            <Input
              placeholder="Phone number"
              className="col-span-3"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
            />
          </FormControl>
          <FormControl label="Alamat" horizontal>
            <Input
              placeholder="address"
              className="col-span-3"
              value={data.address}
              onChange={(e) => setData('address', e.target.value)}
            />
          </FormControl>
          <FormControl label="Email address" horizontal>
            <Input
              placeholder="email address"
              className="col-span-3"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </FormControl>
        </CardContent>
        <CardFooter>
          <FormControl label="" horizontal>
            <div>
              <Button>Simpan</Button>
            </div>
          </FormControl>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditInformasiPerusahaan;
