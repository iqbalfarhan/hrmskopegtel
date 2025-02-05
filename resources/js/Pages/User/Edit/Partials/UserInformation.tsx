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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { User } from '@/types/user';
import { useForm } from '@inertiajs/react';
import { FC, FormEvent } from 'react';

type UserInformationProps = {
  user: User;
  roles: Role[];
  perusahaans: Perusahaan[];
};

const UserInformation: FC<UserInformationProps> = ({
  user,
  roles,
  perusahaans,
}) => {
  const { toast } = useToast();

  const { data, setData, errors, put } = useForm({
    name: user.name,
    phone: user.phone,
    email: user.email,
    password: '',
    role: user.roles?.[0]?.name,
    perusahaan_id: user.perusahaan_id,
  });

  const handleEditUser = (e: FormEvent) => {
    e.preventDefault();
    put(route('user.update', user.id), {
      onSuccess: () => {
        toast({
          title: 'Berhasil',
          description: 'Data berhasil diubah',
        });
      },
      preserveScroll: true,
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit data pengguna</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          totam!
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleEditUser}>
        <CardContent className="grid grid-cols-2 gap-6">
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
          <FormControl label="Perusahaan">
            <Select
              defaultValue={data.perusahaan_id?.toString()}
              onValueChange={(e) => setData('perusahaan_id', Number(e))}
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
        </CardContent>

        <CardFooter>
          <Button variant={'default'}>Simpan</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UserInformation;
