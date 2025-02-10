import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';
import {
  Building2,
  CopyCheck,
  Database,
  FilePlus,
  Home,
  Lock,
  Users2,
} from 'lucide-react';
import MenuItem from '../menu-item';

const menus = [
  { title: 'Dashboard', icon: Home, href: '/dashboard' },
  { title: 'Riwayat Absensi', icon: CopyCheck, href: '/absensi' },
  { title: 'Pengajuan Cuti', icon: FilePlus, href: '/absensi' },
];

const SuperadminMenus = () => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Data master</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <MenuItem title="Dashboard" icon={Home} href="/" />
            <MenuItem
              title="List Perusahaan"
              icon={Building2}
              href="/perusahaan"
            />
            <MenuItem
              title="User Management"
              icon={Users2}
              href="/user"
              show={true}
            />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>User Access</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <MenuItem
              title="Role & Permissions"
              icon={Lock}
              href={route('role.index')}
            />
            <MenuItem title="Database" icon={Database} href="/karyawan" />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default SuperadminMenus;
