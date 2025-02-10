import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { CopyCheck, FilePlus, Home, TimerReset } from 'lucide-react';
import MenuItem from '../menu-item';

const menus = [
  { title: 'Dashboard', icon: Home, href: '/dashboard' },
  { title: 'Riwayat Absensi', icon: CopyCheck, href: '/absensi' },
];

const onProgress = [
  { title: 'Pengajuan Cuti', icon: FilePlus, href: '/absensi' },
  { title: 'Pengajuan Lembur', icon: TimerReset, href: '/absensi' },
];

const KaryawanMenus = () => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Menu Karyawan</SidebarGroupLabel>
        <SidebarGroupContent>
          {menus.map((menu) => (
            <SidebarMenu key={menu.title}>
              <MenuItem {...menu} />
            </SidebarMenu>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>On progress feature</SidebarGroupLabel>
        <SidebarGroupContent>
          {onProgress.map((menu) => (
            <SidebarMenu key={menu.title}>
              <MenuItem {...menu} />
            </SidebarMenu>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default KaryawanMenus;
