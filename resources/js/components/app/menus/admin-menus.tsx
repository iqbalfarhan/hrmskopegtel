import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import { Building2, CopyCheck, FilePlus, Home, Users } from 'lucide-react';
import MenuItem from '../menu-item';

const menus = [
  { title: 'Dashboard', icon: Home, href: '/dashboard' },
  { title: 'Approval Absensi', icon: CopyCheck, href: '/absensi' },
  { title: 'Pengajuan Cuti', icon: FilePlus, href: '/absensi' },
];

const AdminMenus = () => {
  const { user } = usePage().props.auth;
  const settings = [
    {
      title: 'Perusahaan',
      icon: Building2,
      href: route('perusahaan.show', user.perusahaan_id ?? 1),
    },
    { title: 'List Karyawan', icon: Users, href: '/perusahaan' },
  ];
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Admin perusahaan</SidebarGroupLabel>
        <SidebarGroupContent>
          {menus.map((menu) => (
            <SidebarMenu key={menu.title}>
              <MenuItem {...menu} />
            </SidebarMenu>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Pengaturan</SidebarGroupLabel>
        <SidebarGroupContent>
          {settings.map((menu) => (
            <SidebarMenu key={menu.title}>
              <MenuItem {...menu} />
            </SidebarMenu>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default AdminMenus;
