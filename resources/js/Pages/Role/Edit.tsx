import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { cn, groupBy } from '@/lib/utils';
import { Permission, Role } from '@/types/permission';
import { router, useForm } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { FormEvent } from 'react';

const RoleEdit = ({
  role,
  permissions,
}: {
  role: Role;
  permissions: Permission[];
}) => {
  const { toast } = useToast();
  const permissionsGrouped = groupBy(permissions, 'group');

  const { data, setData, put, errors } = useForm({
    name: role.name,
    description: role.description,
  });

  const assign = (role: Role['id'], permission: Permission['id']) => {
    router.post(
      route('role.assign'),
      {
        role,
        permission,
      },
      {
        preserveScroll: true,
        onSuccess: () =>
          toast({ description: 'Success update permission for role' }),
      },
    );
  };

  const updateRoleName = (e: FormEvent) => {
    e.preventDefault();
    put(route('role.update', role.id), {
      onSuccess: () => toast({ description: 'Success update role name' }),
      preserveScroll: true,
    });
  };

  return (
    <Authenticated header={'Edit role information'}>
      <Tabs defaultValue="information">
        <TabsList>
          <TabsTrigger value="information">Information</TabsTrigger>
          <TabsTrigger value="permissions">Permission</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <Card>
            <CardHeader>
              <CardTitle>Edit {role.name} role</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <form onSubmit={updateRoleName} className="space-y-4">
              <CardContent className="space-y-6">
                <FormControl label="Role name" error={errors.name}>
                  <Input
                    defaultValue={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className={cn(
                      'col-span-3',
                      errors.name && 'border-destructive',
                    )}
                  />
                </FormControl>
                <FormControl label="Description" error={errors.description}>
                  <Textarea
                    defaultValue={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className={cn(
                      'col-span-3 flex gap-2',
                      errors.description && 'border-destructive',
                    )}
                  />
                </FormControl>
              </CardContent>
              <CardFooter>
                <Button>
                  <Check />
                  Update Role name
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="permissions">
          <Card>
            <CardHeader>
              <CardTitle>Permission</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-10">
                {permissionsGrouped.map(({ group, items }) => (
                  <div key={group} className="space-y-2">
                    <div className="font-bold capitalize">{group}</div>
                    <div className="flex flex-col gap-2">
                      {items.map((item) => (
                        <div
                          className="flex cursor-pointer items-center space-x-2"
                          key={item.id}
                        >
                          {/* <Switch
                            id={item.id.toString()}
                            checked={role.permissions.some(
                              (permit) => permit.id === item.id,
                            )}
                            onCheckedChange={() => assign(role.id, item.id)}
                          /> */}
                          <Switch
                            id={item.id.toString()}
                            checked={role.permissions.some(
                              (permit) => permit.id === item.id,
                            )}
                            onCheckedChange={() => assign(role.id, item.id)}
                          />
                          <Label htmlFor={item.id.toString()}>
                            {item.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-between"></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Authenticated>
  );
};

export default RoleEdit;
