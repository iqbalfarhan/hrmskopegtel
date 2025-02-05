import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Permission } from '@/types/permission';
import { useForm } from '@inertiajs/react';
import { Check, Edit } from 'lucide-react';
import { FC, FormEvent, useState } from 'react';

type EditPermissionProps = {
  permission: Permission;
};

const EditPermission: FC<EditPermissionProps> = ({ permission }) => {
  const [open, setOpen] = useState(false);

  const { data, setData, put } = useForm({
    group: permission.group,
    name: permission.name,
  });

  const handleCreatePermission = (e: FormEvent) => {
    e.preventDefault();
    put(route('permission.update', permission.id), {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'xs'} variant={'secondary'}>
          <Edit size={16} />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit permission</DialogTitle>
          <DialogDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreatePermission} className="space-y-6">
          <div className="space-y-2">
            <FormControl horizontal label="Group Name">
              <Input
                name="group"
                value={data.group?.toString()}
                onChange={(e) => setData('group', e.target.value)}
                placeholder="Permission group"
                required
                className={'col-span-3'}
              />
            </FormControl>
            <FormControl horizontal label="Permit Name">
              <Input
                name="permission"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                placeholder="Permission name"
                required
                className={'col-span-3'}
              />
            </FormControl>
          </div>
          <DialogFooter>
            <Button>
              <Check />
              Update
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPermission;
