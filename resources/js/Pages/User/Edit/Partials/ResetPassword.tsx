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
import { User } from '@/types/user';
import { useForm } from '@inertiajs/react';
import { Copy } from 'lucide-react';
import { FC } from 'react';
import GeneratePassword from './GeneratePassword';

type ResetPasswordProps = {
  user: User;
};
const ResetPassword: FC<ResetPasswordProps> = ({ user }) => {
  const { data, setData, post } = useForm({
    password: '',
  });

  const handleSubmit = () => {
    post(route('user.reset-password', user.id), {
      onSuccess: () => {
        setData('password', '');
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>
          halaman ini digunakan untuk mereset password pengguna.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormControl label="Passowrd baru">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Tulis password baru disini"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
            />
            <Button size={'icon'} variant={'outline'}>
              <Copy />
            </Button>
          </div>
        </FormControl>
      </CardContent>
      <CardFooter className="justify-between">
        <GeneratePassword onApply={(newpass) => setData('password', newpass)} />
        <Button onClick={handleSubmit}>Simpan</Button>
      </CardFooter>
    </Card>
  );
};

export default ResetPassword;
