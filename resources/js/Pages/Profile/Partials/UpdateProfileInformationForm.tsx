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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Perusahaan } from '@/types/perusahaan';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
  mustVerifyEmail = true,
  status,
  perusahaans,
}: {
  mustVerifyEmail: boolean;
  status?: string;
  perusahaans: Perusahaan[];
}) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      perusahaan_id: user.perusahaan_id,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>

        <CardDescription>
          Update your account's profile information and email address.
        </CardDescription>
      </CardHeader>

      <form onSubmit={submit}>
        <CardContent className="space-y-4">
          <FormControl error={errors.name} label="Nama user" horizontal>
            <Input
              id="name"
              className="col-span-3"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              required
              autoComplete="name"
            />
          </FormControl>

          <FormControl error={errors.email} label="Alamat email" horizontal>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
              autoComplete="username"
            />
          </FormControl>

          <FormControl error={errors.phone} label="Nomor telepon" horizontal>
            <Input
              id="phone"
              type="phone"
              className="col-span-3"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              required
            />
          </FormControl>

          <FormControl error={errors.phone} label="Perusahaan" horizontal>
            <Select
              value={data.perusahaan_id?.toString()}
              onValueChange={(value) => setData('perusahaan_id', Number(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {perusahaans.map((perusahaan) => (
                  <SelectItem
                    key={perusahaan.id}
                    value={perusahaan.id.toString()}
                  >
                    {perusahaan.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>

          {mustVerifyEmail && user.email_verified_at === null && (
            <div>
              <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                Your email address is unverified.
                <Link
                  href={route('verification.send')}
                  method="post"
                  as="button"
                  className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                  Click here to re-send the verification email.
                </Link>
              </p>

              {status === 'verification-link-sent' && (
                <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                  A new verification link has been sent to your email address.
                </div>
              )}
            </div>
          )}
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
