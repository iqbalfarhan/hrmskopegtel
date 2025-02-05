import { Badge } from '@/components/ui/badge';
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
import { User } from '@/types/user';
import { useForm } from '@inertiajs/react';
import { LogIn } from 'lucide-react';
import moment from 'moment';
import { FC } from 'react';

type CheckInCardProps = {
  user: User;
};

const CheckInCard: FC<CheckInCardProps> = ({ user }) => {
  const { toast } = useToast();
  const { post } = useForm({
    user_id: user.id,
  });

  const handleSubmit = () => {
    post(route('absensi.store'), {
      onSuccess: () => {
        toast({
          title: 'Berhasil',
          description: 'Selamat datang kembali',
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
        <Badge>Terlambat</Badge>
      </CardHeader>
      <Separator />
      <CardContent className="mt-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-bold opacity-50">Check In Time</Label>
            <div className="text-2xl">--:--</div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Check out Time</Label>
            <div className="text-2xl">--:--</div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="mt-5 justify-between">
        <Button disabled className="w-full">
          <LogIn />
          Absen masuk
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CheckInCard;
