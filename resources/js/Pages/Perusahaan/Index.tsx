import {
  AlertDialog,
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
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { getInitials } from '@/lib/utils';
import { Perusahaan } from '@/types/perusahaan';
import { Link } from '@inertiajs/react';
import { ExternalLink, Trash2 } from 'lucide-react';
import { FC } from 'react';
import CreatePerusahaan from './Pertials/CreatePerusahaan';
import FilterPerusahaan from './Pertials/FilterPerusahaan';

type PerusahaanIndexProps = {
  perusahaans: Perusahaan[];
};

const PerusahaanIndex: FC<PerusahaanIndexProps> = ({ perusahaans }) => {
  return (
    <Authenticated
      header={'Daftar perusahaan'}
      actions={
        <>
          <CreatePerusahaan />
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
                    <Avatar>
                      <AvatarFallback>
                        {getInitials(perusahaan.name)}
                      </AvatarFallback>
                      <AvatarImage
                        src={perusahaan.logo}
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
                <TableCell className="flex items-end justify-end gap-2">
                  <Button variant={'secondary'} asChild>
                    <Link href={route('perusahaan.show', perusahaan.id)}>
                      View Perusahaan
                      <ExternalLink />
                    </Link>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size={'icon'} variant={'ghost'}>
                        <Trash2 />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete perusahaan</AlertDialogTitle>
                        <AlertDialogDescription>
                          Anda yakin ingin menghapus perusahaan ini?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                          <Button variant={'outline'}>Cancel</Button>
                        </AlertDialogCancel>
                        <Button variant={'destructive'} asChild>
                          <Link
                            href={route('perusahaan.destroy', perusahaan.id)}
                            method="delete"
                          >
                            Delete
                          </Link>
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
