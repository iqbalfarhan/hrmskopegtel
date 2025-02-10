import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import TerlambatBadge from '@/Pages/Absensi/Partials/TerlambatBadge';
import { Absensi } from '@/types/absensi';
import { User } from '@/types/user';
import { useForm } from '@inertiajs/react';
import { LogIn, LogOut } from 'lucide-react';
import moment from 'moment';
import { FC } from 'react';

type CheckInCardProps = {
  user: User;
  absensi: Absensi;
};

const CheckInCard: FC<CheckInCardProps> = ({ user, absensi }) => {
  const { toast } = useToast();

  const { data, setData, post, put } = useForm({
    tanggal: moment().format('YYYY-MM-DD'),
    user_id: user.id,
    checkin: absensi?.checkin ? moment(absensi?.checkin).format('HH:mm') : null,
    checkout: absensi?.checkout
      ? moment(absensi?.checkout).format('HH:mm')
      : null,
  });

  const handleCheckOut = () => {
    put(route('absensi.checkout', absensi.id), {
      onSuccess: () => {
        toast({
          title: 'Berhasil',
          description: 'Selamat datang kembali',
        });
        setData('checkout', moment().format('HH:mm'));
      },
    });
  };

  const handleCheckIn = () => {
    post(route('absensi.store'), {
      onSuccess: () => {
        toast({
          title: 'Berhasil',
          description: 'Selamat datang kembali',
        });
        setData('checkin', moment().format('HH:mm'));
      },
      onError: (data) => {
        toast({
          title: 'Gagal',
          description: JSON.stringify(data),
          variant: 'destructive',
        });
      },
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{moment().format('DD MMMM YYYY')}</CardTitle>
          <CardDescription>{moment().format('dddd')}</CardDescription>
        </div>
        <TerlambatBadge terlambat={absensi?.terlambat ?? false} />
      </CardHeader>
      <Separator />
      <CardContent className="mt-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-bold opacity-50">Check In Time</Label>
            <div className="text-2xl font-mono font-bold">
              {data.checkin ?? '-'}
            </div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Check Out Time</Label>
            <div className="text-2xl font-mono font-bold">
              {data.checkout ?? '-'}
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="mt-6 justify-between">
        <Button
          className="w-full"
          disabled={absensi?.completed ?? false}
          onClick={() => {
            if (data.checkin === null) {
              handleCheckIn();
            } else {
              handleCheckOut();
            }
          }}
        >
          {absensi ? (
            <LogOut className="mr-2 h-4 w-4" />
          ) : (
            <LogIn className="mr-2 h-4 w-4" />
          )}
          Absen {absensi ? 'Keluar' : 'Masuk'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CheckInCard;
