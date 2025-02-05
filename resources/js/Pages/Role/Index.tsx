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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Role } from '@/types/permission';
import { Link } from '@inertiajs/react';
import { ExternalLink, Lock, Trash2 } from 'lucide-react';
import { FC } from 'react';
import RoleCreate from './Partials/Create';

type RoleIndexProps = {
  roles: Role[];
};

const RoleIndex: FC<RoleIndexProps> = ({ roles }) => {
  const { toast } = useToast();
  return (
    <Authenticated
      header={'Role & Permission'}
      actions={
        <div className="flex gap-2">
          <RoleCreate />
          <Button asChild>
            <Link href={route('permission.index')}>
              <Lock size={16} /> Permission lists
            </Link>
          </Button>
        </div>
      }
    >
      <Card>
        <Table>
          <TableBody>
            {roles.map((role, index) => (
              <TableRow key={role.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell className="truncate">{role.description}</TableCell>
                <TableCell>
                  <Badge>{role.permissions.length} permission</Badge>
                </TableCell>

                <TableCell className="flex flex-row justify-end">
                  <Button variant={'secondary'} asChild>
                    <Link href={route('role.edit', role.id)}>
                      Edit role
                      <ExternalLink size={16} />
                    </Link>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={'ghost'} size={'icon'}>
                        <Trash2 />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Hapus role ini</AlertDialogTitle>
                        <AlertDialogDescription>
                          Hapus role mungkin akan menimbulkan masalah
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                          <Button variant={'outline'}>Cancel</Button>
                        </AlertDialogCancel>
                        <Button variant={'destructive'} asChild>
                          <Link
                            href={route('role.destroy', role.id)}
                            method="delete"
                            onSuccess={() =>
                              toast({
                                description: 'Success delete role',
                              })
                            }
                          >
                            <Trash2 size={16} />
                            Hapus role
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

export default RoleIndex;
