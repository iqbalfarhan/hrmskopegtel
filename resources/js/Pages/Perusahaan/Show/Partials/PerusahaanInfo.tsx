import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { getInitials } from '@/lib/utils';
import { Perusahaan } from '@/types/perusahaan';
import { FC } from 'react';

type PerusahaanInfoProps = {
  perusahaan: Perusahaan;
};

const PerusahaanInfo: FC<PerusahaanInfoProps> = ({ perusahaan }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{perusahaan.name}</CardTitle>
        <CardDescription>{perusahaan.address}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent>
              <Avatar className="size-24">
                <AvatarFallback>{getInitials(perusahaan.name)}</AvatarFallback>
                <AvatarImage src={perusahaan.photo} />
              </Avatar>
            </CardContent>
          </Card>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div>
              <Label className="opacity-50">Nama perusahaan</Label>
              <p>{perusahaan.name}</p>
            </div>
            <div>
              <Label className="opacity-50">Alamat perusahaan</Label>
              <p>{perusahaan.address}</p>
            </div>
            <div>
              <Label className="opacity-50">Nomor telepon</Label>
              <p>{perusahaan.phone}</p>
            </div>
            <div>
              <Label className="opacity-50">Email perusahaan</Label>
              <p>{perusahaan.email}</p>
            </div>
            <div>
              <Label className="opacity-50">Karyawan</Label>
              <p>{perusahaan.users?.length}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerusahaanInfo;
