import TableActions from '@/components/app/table-actions';
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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { User } from '@/types/user';
import { Link } from '@inertiajs/react';
import { Ellipsis, EllipsisVertical, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import CreateUser from './Partial/Create';
import FilterUser from './Partial/Filter';
import UserPopover from './Partial/UserPopover';

const UserIndex = ({
  roles,
  users,
  perusahaans,
}: {
  roles: Role[];
  users: User[];
  perusahaans: Perusahaan[];
}) => {
  const [search, setSearch] = useState<string>('');
  const [userIds, setUserIds] = useState<number[]>([]);

  const handleCheckboxChange = (checked: boolean, id: number) => {
    if (checked) {
      setUserIds((prev) => [...prev, id]);
    } else {
      setUserIds((prev) => prev.filter((userId) => userId !== id));
    }
  };
  return (
    <Authenticated
      header={'User management'}
      actions={
        <>
          <CreateUser roles={roles} perusahaans={perusahaans} />
          <FilterUser
            search={search}
            setSearch={setSearch}
            perusahaans={perusahaans}
            roles={roles}
          />
          {/* <SearchUser search={search} setSearch={setSearch} /> */}
          {userIds.length > 0 && (
            <>
              <Separator orientation="vertical" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    Bulk actions <EllipsisVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit selected item</DropdownMenuItem>
                  <DropdownMenuItem>Delete selected item</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </>
      }
    >
      <Card>
        <Table>
          <TableBody>
            {users
              .filter((user) =>
                user?.name.toLowerCase().includes(search.toLowerCase()),
              )
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox
                      checked={userIds.includes(user.id)}
                      onCheckedChange={(checked) => {
                        handleCheckboxChange(checked as boolean, user.id);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <UserPopover user={user} />
                  </TableCell>
                  <TableCell>{user.nik}</TableCell>
                  <TableCell>{user.perusahaan?.name}</TableCell>
                  <TableCell>
                    {user.roles?.map((role) => (
                      <Badge key={role.id} className="capitalize">
                        {role.name}
                      </Badge>
                    ))}
                  </TableCell>
                  <TableCell>
                    <TableActions>
                      <Button variant={'secondary'} asChild>
                        <Link href={route('user.show', user.id)}>
                          View user
                          <ExternalLink />
                        </Link>
                      </Button>
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
                    </TableActions>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </Authenticated>
  );
};

export default UserIndex;
