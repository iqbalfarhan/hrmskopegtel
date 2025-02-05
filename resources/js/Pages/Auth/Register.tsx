import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        <CardContent>
          <div>
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="name"
              autoFocus={true}
              onChange={(e) => setData('name', e.target.value)}
            />

            <p className="text-destructive text-sm">{errors.name}</p>
          </div>

          <div className="mt-4">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              onChange={(e) => setData('email', e.target.value)}
            />

            <p className="text-destructive text-sm">{errors.email}</p>
          </div>

          <div className="mt-4">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}
            />

            <p className="text-destructive text-sm">{errors.password}</p>
          </div>

          <div className="mt-4">
            <Label htmlFor="password_confirmation">Konfirmasi Password</Label>

            <Input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password_confirmation', e.target.value)}
            />

            <p className="text-destructive text-sm">
              {errors.password_confirmation}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Link
            href={route('login')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
          >
            Already registered?
          </Link>

          <Button className="ms-4" disabled={processing}>
            Register
          </Button>
        </CardFooter>
      </form>
    </GuestLayout>
  );
}
