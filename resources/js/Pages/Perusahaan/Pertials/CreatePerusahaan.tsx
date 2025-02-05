import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

const CreatePerusahaan = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const { data, setData, post, processing, reset } = useForm({
    name: '',
    address: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('perusahaan.store'), {
      onSuccess: () => {
        reset();
        toast({
          title: 'Success',
          description: 'Perusahaan berhasil dibuat',
        });
        setOpen(false);
      },
      onError: (error) => {
        toast({
          variant: 'destructive',
          title: 'Error while processing',
          description: error.message,
        });
      },
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Perusahaan</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Perusahaan</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            eum.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <FormControl label="Nama perusahaan">
              <Input
                placeholder="Company name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
              />
            </FormControl>
            <FormControl label="Alamat">
              <Textarea
                placeholder="Company address"
                value={data.address}
                onChange={(e) => setData('address', e.target.value)}
              />
            </FormControl>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'secondary'}>Close</Button>
            </DialogClose>
            <Button variant={'default'} disabled={processing}>
              <Plus />
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePerusahaan;
