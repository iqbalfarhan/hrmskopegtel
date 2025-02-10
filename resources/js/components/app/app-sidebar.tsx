import { usePage } from '@inertiajs/react';
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '../ui/sidebar';
import AdminMenus from './menus/admin-menus';
import KaryawanMenus from './menus/karyawan-menus';
import SuperadminMenus from './menus/superadmin-menus';
import { TeamSwitcher } from './team-switcher';
import UserNav from './user-nav';

const AppSidebar = () => {
  const { role } = usePage().props.auth;
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher
          teams={[
            {
              name: 'Acme Inc',
              logo: GalleryVerticalEnd,
              plan: 'Enterprise',
            },
            {
              name: 'Acme Corp.',
              logo: AudioWaveform,
              plan: 'Startup',
            },
            {
              name: 'Evil Corp.',
              logo: Command,
              plan: 'Free',
            },
          ]}
        />
      </SidebarHeader>
      <SidebarContent>
        {role == 'karyawan' && <KaryawanMenus />}
        {role == 'admin' && <AdminMenus />}
        {role == 'superadmin' && <SuperadminMenus />}
      </SidebarContent>
      <SidebarFooter>
        <UserNav />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
