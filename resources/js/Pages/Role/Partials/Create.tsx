import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useForm } from '@inertiajs/react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Check, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

const RoleCreate = () => {
  const [show, setShow] = useState(false);
  const { toast } = useToast();
  const { data, setData, post, errors } = useForm({
    name: '',
    description: '',
  });

  const createRole = (e: FormEvent) => {
    e.preventDefault();
    post(route('role.store'), {
      onSuccess: () => {
        setData({ name: '', description: '' });
        toast({
          description: 'Success create new role',
        });
        setShow(false);
      },
    });
  };

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogTrigger>
        <Button>
          <Plus size={16} /> Create New Role
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Role</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={createRole} className="space-y-6">
          <FormControl horizontal label="Role Name">
            <Input
              placeholder="Role Name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className={cn('col-span-3', {
                'border-destructive': errors.name,
              })}
            />
          </FormControl>
          <FormControl horizontal label="Description">
            <Textarea
              placeholder="Description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className={cn('col-span-3', {
                'border-destructive': errors.description,
              })}
            />
          </FormControl>
          <DialogFooter>
            <Button onClick={createRole}>
              <Check />
              Create Role
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RoleCreate;
