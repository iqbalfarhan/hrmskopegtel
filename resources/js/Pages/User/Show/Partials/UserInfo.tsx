import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { getInitials } from '@/lib/utils';
import { User } from '@/types/user';
import { BadgeDollarSign, ExternalLink, Link, LogIn } from 'lucide-react';
import { FC } from 'react';

type UserInfoProps = {
  user: User;
};

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const stats = [
    {
      icon: <LogIn />,
      label: 'Total Attendance',
      value: user.absensis?.length ?? 0,
    },
    {
      icon: <Link />,
      label: 'AVG Check In Time',
      value: '08:02',
    },
    {
      icon: <ExternalLink />,
      label: 'AVG Check Out Time',
      value: '17:08',
    },
    {
      icon: <BadgeDollarSign />,
      label: 'Rata rata kehadira',
      value: 'Tepat waktu',
    },
  ];
  return (
    <Card>
      <CardContent className="mt-6 space-y-10">
        <div className="flex gap-6">
          <Avatar className="size-24">
            <AvatarFallback className="text-3xl">
              {getInitials(user.name)}
            </AvatarFallback>
            <AvatarImage src={user.photo} />
          </Avatar>

          <div className="grid w-full gap-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>

            <div className="flex flex-row gap-28">
              <div>
                <Label className="opacity-50">Perusahaan</Label>
                <p>{user.perusahaan?.name ?? '-'}</p>
              </div>
              <div>
                <Label className="opacity-50">Nomor telepon</Label>
                <p>{user.phone ?? '-'}</p>
              </div>
              <div>
                <Label className="opacity-50">Email address</Label>
                <p>{user.email ?? '-'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            return (
              <Card key={index}>
                <CardContent className="mt-5 flex items-center gap-4">
                  <Button
                    size={'icon'}
                    variant={'secondary'}
                    className="size-10"
                  >
                    {stat.icon}
                  </Button>
                  <div>
                    <h2 className="text-2xl font-bold">{stat.value}</h2>
                    <p className="text-sm opacity-50">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
