import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { LogIn } from 'lucide-react';
import { FormEventHandler } from 'react';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm<{
    email: string;
    password: string;
    remember: boolean;
  }>({
    email: 'superadmin@gmail.com',
    password: 'superadmin',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <CardContent className="space-y-4">
          <FormControl error={errors.email} label="Email">
            <Input
              type="email"
              name="email"
              value={data.email}
              autoComplete="email"
              className="col-span-3"
              autoFocus={true}
              onChange={(e) => setData('email', e.target.value)}
            />
          </FormControl>

          <FormControl error={errors.password} label="Password">
            <Input
              type="password"
              name="password"
              value={data.password}
              className="col-span-3"
              autoComplete="current-password"
              onChange={(e) => setData('password', e.target.value)}
            />
          </FormControl>
          <FormControl error={errors.password} label="">
            <div className="col-span-3 flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={data.remember}
                onCheckedChange={() => setData('remember', !data.remember)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </FormControl>
        </CardContent>

        <CardFooter className="flex justify-between">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
            >
              Forgot your password?
            </Link>
          )}

          <Button className="ms-4" disabled={processing}>
            <LogIn />
            Log in
          </Button>
        </CardFooter>
      </form>
    </GuestLayout>
  );
}
