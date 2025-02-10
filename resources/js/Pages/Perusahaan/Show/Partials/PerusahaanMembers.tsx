import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import CreateUser from '@/Pages/User/Partial/Create';
import UserPopover from '@/Pages/User/Partial/UserPopover';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { User } from '@/types/user';
import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';
import { FC, useState } from 'react';

type PerusahaanMembersProps = {
  users: User[];
  roles: Role[];
  perusahaan: Perusahaan;
};

const PerusahaanMembers: FC<PerusahaanMembersProps> = ({
  users,
  perusahaan,
  roles,
}) => {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center space-x-4">
        <div>
          <Input
            placeholder="Pencarian"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <CreateUser perusahaans={[perusahaan]} roles={roles} />
        </div>
      </div>
      <Card>
        <Table>
          <TableBody>
            {users
              ?.filter((user) =>
                user?.name.toLowerCase().includes(search.toLowerCase()),
              )
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <UserPopover user={user} />
                  </TableCell>
                  <TableCell>
                    <Badge>128 Attendance</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge>0/12 cuti</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant={'secondary'} asChild>
                      <Link href={route('user.edit', user.id)}>
                        View user <ExternalLink />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default PerusahaanMembers;
