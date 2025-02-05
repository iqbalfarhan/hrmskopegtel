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
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

export default function UpdatePasswordForm() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);

  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: '',
      password: '',
      password_confirmation: '',
    });

  const updatePassword: FormEventHandler = (e) => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current?.focus();
        }
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Password</CardTitle>

        <CardDescription>
          Ensure your account is using a long, random password to stay secure.
        </CardDescription>
      </CardHeader>

      <form onSubmit={updatePassword}>
        <CardContent className="space-y-4">
          <FormControl
            error={errors.current_password}
            label="Current password"
            horizontal
          >
            <Input
              id="current_password"
              ref={currentPasswordInput}
              value={data.current_password}
              onChange={(e) => setData('current_password', e.target.value)}
              type="password"
              className="col-span-3"
              autoComplete="current-password"
            />
          </FormControl>

          <FormControl error={errors.password} label="New password" horizontal>
            <Input
              id="password"
              ref={passwordInput}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              type="password"
              className="col-span-3"
              autoComplete="new-password"
            />
          </FormControl>

          <FormControl
            error={errors.password_confirmation}
            label="Confirm new password"
            horizontal
          >
            <Input
              id="password_confirmation"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              type="password"
              className="col-span-3"
              autoComplete="new-password"
            />
          </FormControl>
        </CardContent>

        <CardFooter>
          <FormControl horizontal>
            <div className="col-span-3 flex items-center justify-between">
              <Button disabled={processing}>Save</Button>

              <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Saved.
                </p>
              </Transition>
            </div>
          </FormControl>
        </CardFooter>
      </form>
    </Card>
  );
}
