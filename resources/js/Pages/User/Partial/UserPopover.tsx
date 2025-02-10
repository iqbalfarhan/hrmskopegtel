import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { getInitials } from '@/lib/utils';
import { User } from '@/types/user';
import { AtSign, Building2, Phone } from 'lucide-react';
import { FC } from 'react';

type UserPopoverProps = {
  user: User;
};

const UserPopover: FC<UserPopoverProps> = ({ user }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2">
          <Avatar className="size-8 rounded-lg">
            <AvatarFallback>{getInitials(user?.name ?? '')}</AvatarFallback>
            <AvatarImage src={user?.photo} alt={user?.name} />
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user?.name}</span>
            <span className="truncate text-xs">{user?.email}</span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="text-xs">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="size-20">
            <AvatarFallback>{getInitials(user?.name ?? '')}</AvatarFallback>
            <AvatarImage src={user?.photo} alt={user?.name} />
          </Avatar>
          <div className="flex flex-col items-center">
            <span className="truncate font-semibold">{user?.name}</span>
            <span className="truncate text-xs">{user?.email}</span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex items-center">
          <Phone className="size-3" />
          <span className="ml-2">{user?.phone}</span>
        </div>
        <div className="flex items-center">
          <AtSign className="size-3" />
          <span className="ml-2">{user?.email}</span>
        </div>
        <div className="flex items-center">
          <Building2 className="size-3" />
          <span className="ml-2">{user?.perusahaan?.name}</span>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
