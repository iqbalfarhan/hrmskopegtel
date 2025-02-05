import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Perusahaan } from '@/types/perusahaan';
import { Head, Link } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdatePhotoProfile from './Partials/UpdatePhotoProfile';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
  mustVerifyEmail,
  status,
  perusahaans,
}: PageProps<{
  mustVerifyEmail: boolean;
  status?: string;
  perusahaans: Perusahaan[];
}>) {
  return (
    <AuthenticatedLayout
      header="Edit Profile"
      actions={
        <>
          <Button asChild>
            <Link href={route('logout')} method="post">
              <LogOut />
              Logout
            </Link>
          </Button>
        </>
      }
    >
      <Head title="Profile" />

      <Tabs defaultValue="information">
        <TabsList>
          <TabsTrigger value="information">Profile information</TabsTrigger>
          <TabsTrigger value="password">Change password</TabsTrigger>
          <TabsTrigger value="account">Delete Account</TabsTrigger>
          <TabsTrigger value="photo">Profile Photo</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <UpdateProfileInformationForm
            mustVerifyEmail={mustVerifyEmail}
            status={status}
            perusahaans={perusahaans}
          />
        </TabsContent>
        <TabsContent value="password">
          <UpdatePasswordForm />
        </TabsContent>
        <TabsContent value="account">
          <DeleteUserForm />
        </TabsContent>
        <TabsContent value="photo">
          <UpdatePhotoProfile />
        </TabsContent>
      </Tabs>
    </AuthenticatedLayout>
  );
}
