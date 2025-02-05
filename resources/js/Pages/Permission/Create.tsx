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
import { useForm } from '@inertiajs/react';
import { Check, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

const CreatePermission = () => {
  const [open, setOpen] = useState(false);

  const { data, setData, post } = useForm({
    group: '',
    name: '',
  });

  const handleCreatePermission = (e: FormEvent) => {
    e.preventDefault();
    post(route('permission.store'), {
      onSuccess: () => {
        setData({ group: '', name: '' });
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Create permission
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create permission</DialogTitle>
          <DialogDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreatePermission} className="space-y-6">
          <div className="my-6 space-y-2">
            <FormControl horizontal label="Group Name">
              <Input
                name="group"
                value={data.group}
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
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePermission;
