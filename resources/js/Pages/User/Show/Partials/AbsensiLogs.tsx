import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AbsensiCard from '@/Pages/Absensi/Partials/AbsensiCard';
import { Absensi } from '@/types/absensi';
import { FC } from 'react';

type AbsensiLogsProps = {
  absensis?: Absensi[];
};

const AbsensiLogs: FC<AbsensiLogsProps> = ({ absensis }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Riwayat Absensi</CardTitle>
        <CardDescription>Daftar riwayat absensi bulan ini</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {absensis?.map((absensi) => (
            <AbsensiCard key={absensi.id} absensi={absensi} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AbsensiLogs;
