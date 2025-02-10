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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { getInitials } from '@/lib/utils';
import { Perusahaan } from '@/types/perusahaan';
import { Link } from '@inertiajs/react';
import { EllipsisVertical, ExternalLink } from 'lucide-react';
import { FC } from 'react';
import CreatePerusahaan from './Pertials/CreatePerusahaan';
import FilterPerusahaan from './Pertials/FilterPerusahaan';

type PerusahaanIndexProps = {
  perusahaans: Perusahaan[];
  permissions: {
    canCreatePerusahaan: boolean;
    canUpdatePerusahaan: boolean;
    canDeletePerusahaan: boolean;
  };
};

const PerusahaanIndex: FC<PerusahaanIndexProps> = ({
  perusahaans,
  permissions,
}) => {
  const { canCreatePerusahaan, canUpdatePerusahaan, canDeletePerusahaan } =
    permissions;
  return (
    <Authenticated
      header={'Daftar perusahaan'}
      actions={
        <>
          {canCreatePerusahaan && <CreatePerusahaan />}
          <FilterPerusahaan />
        </>
      }
    >
      <Card>
        <Table>
          <TableBody>
            {perusahaans.map((perusahaan) => (
              <TableRow key={perusahaan.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8 rounded-lg">
                      <AvatarFallback>
                        {getInitials(perusahaan.name)}
                      </AvatarFallback>
                      <AvatarImage
                        src={perusahaan.photo}
                        alt={perusahaan.name}
                      />
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {perusahaan.name}
                      </span>
                      <span className="truncate text-xs">
                        {perusahaan.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={'secondary'}>{perusahaan.email}</Badge>
                  <Badge variant={'secondary'}>{perusahaan.phone}</Badge>
                </TableCell>
                <TableCell>
                  <Badge>{perusahaan.users?.length} karyawan</Badge>
                </TableCell>
                <TableCell>
                  <TableActions>
                    {canUpdatePerusahaan && (
                      <Button variant={'secondary'} asChild>
                        <Link href={route('perusahaan.show', perusahaan.id)}>
                          View Perusahaan
                          <ExternalLink />
                        </Link>
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size={'icon'} variant={'ghost'}>
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link
                            className="w-full"
                            href={route('perusahaan.edit', perusahaan.id)}
                          >
                            Edit
                          </Link>
                        </DropdownMenuItem>

                        {canDeletePerusahaan && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                              >
                                Delete
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Delete perusahaan
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Anda yakin ingin menghapus perusahaan ini?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction asChild>
                                  <Link
                                    href={route(
                                      'perusahaan.destroy',
                                      perusahaan.id,
                                    )}
                                    method="delete"
                                    preserveScroll
                                  >
                                    Delete
                                  </Link>
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        )}
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

export default PerusahaanIndex;
