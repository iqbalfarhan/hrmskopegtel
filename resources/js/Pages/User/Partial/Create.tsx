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
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { useForm } from '@inertiajs/react';
import { FC, FormEvent, useState } from 'react';

type CreateUserProps = {
  roles: Role[];
  perusahaans: Perusahaan[];
};

const CreateUser: FC<CreateUserProps> = ({ roles, perusahaans }) => {
  const [open, setOpen] = useState(false);
  const { data, setData, post, errors } = useForm({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: 'karyawan',
    perusahaan_id: '',
  });

  const handleCreateUser = (e: FormEvent) => {
    e.preventDefault();
    post(route('user.store'), {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create user</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buat user baru</DialogTitle>
          <DialogDescription>
            Isi informasi berikut ini untuk membuat user baru
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleCreateUser}>
          <div className="grid grid-cols-2 gap-6 py-6">
            <FormControl label="Nama lengkap" error={errors.name}>
              <Input
                placeholder="Users full name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
              />
            </FormControl>
            <FormControl label="Nomor telepon" error={errors.phone}>
              <Input
                placeholder="Users phone number"
                type="number"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
              />
            </FormControl>
            <FormControl label="Email address" error={errors.email}>
              <Input
                placeholder="username@example.com"
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
            </FormControl>
            <FormControl label="Password" error={errors.email}>
              <Input
                placeholder="password"
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
              />
            </FormControl>
            <FormControl className="col-span-2" label="Role">
              <RadioGroup
                defaultValue={data.role}
                className="my-4 space-y-2"
                onValueChange={(role) => setData('role', role)}
              >
                {roles.map((role) => (
                  <div className="flex items-start space-x-4" key={role.id}>
                    <RadioGroupItem value={role.name} id={role.name} />
                    <Label htmlFor={role.name} className="space-y-2">
                      <h3 className="font-bold capitalize">{role.name}</h3>
                      <p className="opacity-50">{role.description}</p>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl label="Perusahaan">
              <Select
                defaultValue="0"
                onValueChange={(e) => setData('perusahaan_id', e)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Pilih perusahaan</SelectItem>
                  {perusahaans.map((perusahaan) => (
                    <SelectItem
                      value={perusahaan.id.toString()}
                      key={perusahaan.id}
                    >
                      {perusahaan.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'outline'}>Cancel</Button>
            </DialogClose>
            <Button variant={'default'}>Simpan</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUser;
