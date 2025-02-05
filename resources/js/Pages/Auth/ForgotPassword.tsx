import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      <form onSubmit={submit}>
        <CardContent>
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </div>

          {status && (
            <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
              {status}
            </div>
          )}
          <Input
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoFocus={true}
            onChange={(e) => setData('email', e.target.value)}
          />

          <p className="text-destructive text-sm">{errors.email}</p>
        </CardContent>

        <CardFooter>
          <Button disabled={processing}>Email Password Reset Link</Button>
        </CardFooter>
      </form>
    </GuestLayout>
  );
}
