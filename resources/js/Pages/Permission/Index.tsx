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
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { groupBy } from '@/lib/utils';
import { Permission } from '@/types/permission';
import { Link } from '@inertiajs/react';
import { EllipsisVertical } from 'lucide-react';
import { FC } from 'react';
import CreatePermission from './Create';

type PermissionIndexProps = {
  permissions: Permission[];
};

const PermissionIndex: FC<PermissionIndexProps> = ({ permissions }) => {
  const { toast } = useToast();
  return (
    <Authenticated header={'Permission lists'} actions={<CreatePermission />}>
      <div className="grid grid-cols-4 gap-6">
        {groupBy(permissions, 'group').map(({ group, items }) => (
          <Card key={group}>
            <CardHeader>
              <CardTitle>{group}</CardTitle>
            </CardHeader>
            <CardContent className="px-3">
              {items.map((item) => (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={'ghost'}
                      className="w-full justify-between"
                    >
                      {item.name}
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit permission</DropdownMenuItem>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          Delete permission
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete permission</AlertDialogTitle>
                          <AlertDialogDescription>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda, saepe.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <Link
                              href={route('permission.destroy', item.id)}
                              method="delete"
                              preserveScroll
                              onSuccess={() =>
                                toast({
                                  description: 'Berhasil hapus permission',
                                })
                              }
                            >
                              Delete
                            </Link>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Authenticated>
  );
};

export default PermissionIndex;
