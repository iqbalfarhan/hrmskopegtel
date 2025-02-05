import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { User } from '@/types/user';
import ResetPassword from './Partials/ResetPassword';
import UserInformation from './Partials/UserInformation';

const EditUser = ({
  roles,
  perusahaans,
  user,
}: {
  roles: Role[];
  perusahaans: Perusahaan[];
  user: User;
}) => {
  return (
    <Authenticated header="Edit user">
      <Tabs defaultValue="profile" className="mx-auto w-full max-w-2xl">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Reset password</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <UserInformation
            user={user}
            roles={roles}
            perusahaans={perusahaans}
          />
        </TabsContent>
        <TabsContent value="password">
          <ResetPassword user={user} />
        </TabsContent>
      </Tabs>
    </Authenticated>
  );
};

export default EditUser;
