import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Absensi } from '@/types/absensi';
import { Clock } from 'lucide-react';
import moment from 'moment';
import { FC } from 'react';

type AbsensiCardProps = {
  absensi: Absensi;
};

const AbsensiCard: FC<AbsensiCardProps> = ({ absensi }) => {
  return (
    <Card className="bg-background">
      <CardHeader className="flex flex-row items-start justify-between">
        <CardTitle className="flex flex-row items-center gap-2 text-lg">
          <Clock />
          {moment(absensi.tanggal).format('DD MMMM YYYY')}
        </CardTitle>
        <Badge variant={'secondary'}>Terlambat</Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-bold opacity-50">Check In Time</Label>
            <div className="text-xl">
              {moment(absensi.checkin).format('HH:mm')}
            </div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Check out Time</Label>
            <div className="text-xl">
              {moment(absensi.checkout).format('HH:mm')}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AbsensiCard;
