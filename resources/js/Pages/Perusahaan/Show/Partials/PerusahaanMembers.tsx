import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getInitials } from '@/lib/utils';
import { Perusahaan } from '@/types/perusahaan';
import { Link } from '@inertiajs/react';
import { Ellipsis, ExternalLink } from 'lucide-react';
import { FC, useState } from 'react';

type PerusahaanMembersProps = {
  users: Perusahaan['users'];
};

const PerusahaanMembers: FC<PerusahaanMembersProps> = ({ users }) => {
  const [search] = useState('');
  const [userIds, setUserIds] = useState<number[]>([]);

  const handleCheckboxChange = (checked: boolean, id: number) => {
    if (checked) {
      setUserIds((prev) => [...prev, id]);
    } else {
      setUserIds((prev) => prev.filter((userId) => userId !== id));
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar Karyawan</CardTitle>
        <CardDescription>
          Daftar karyawan yang bekerja di perusahaan ini
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {search && `Pencarian: ${search}`}
          {users
            ?.filter((user) =>
              user?.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-6 rounded bg-sidebar p-4 py-3 shadow-sm hover:opacity-80"
              >
                <div className="flex-0 mx-2 flex items-center">
                  <Checkbox
                    checked={userIds.includes(user.id)}
                    onCheckedChange={(checked) => {
                      handleCheckboxChange(checked as boolean, user.id);
                    }}
                  />
                </div>
                <div className="flex flex-1 items-center">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      <AvatarImage src={user.photo} alt={user.name} />
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="outline">
                    {user.roles?.length && user.roles[0].name}
                  </Badge>
                </div>
                <div className="flex-1">
                  <Badge variant="outline">{user.phone}</Badge>
                </div>
                <div className="flex-0 flex items-center gap-2">
                  <Button variant={'secondary'} asChild>
                    <Link href={route('user.show', user.id)}>
                      View user
                      <ExternalLink />
                    </Link>
                  </Button>
                  {/* <Badge variant="outline">{user.phone}</Badge> */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={'icon'} variant={'ghost'}>
                        <Ellipsis />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={route('user.edit', user.id)}>
                          Edit user
                        </Link>
                      </DropdownMenuItem>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            Delete user
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete user</AlertDialogTitle>
                            <AlertDialogDescription>
                              User tidak akan dihapus permanen anda dapat
                              mengembalikan kapan saja
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction asChild>
                              <Link
                                href={route('user.destroy', user.id)}
                                method="delete"
                                preserveScroll
                              >
                                Delete user
                              </Link>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerusahaanMembers;
