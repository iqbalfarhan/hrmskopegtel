import {
  AudioWaveform,
  Bell,
  Building2,
  CheckSquare2Icon,
  Command,
  Database,
  GalleryVerticalEnd,
  Gauge,
  Lock,
  Users2,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from '../ui/sidebar';
import MenuItem from './menu-item';
import { TeamSwitcher } from './team-switcher';
import UserNav from './user-nav';

const AppSidebar = () => {
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
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItem title="Dashboard" icon={Gauge} href="/" />
            <MenuItem title="Notifikasi" icon={Bell} href="/notification" />
            <MenuItem
              title="Absensi"
              icon={CheckSquare2Icon}
              href={route('absensi.index')}
            />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Data master</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <MenuItem
                title="Perusahaan"
                icon={Building2}
                href="/perusahaan"
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>User Access</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <MenuItem title="User Management" icon={Users2} href="/user" />
              <MenuItem
                title="Role & Permissions"
                icon={Lock}
                href={route('role.index')}
              />
              <MenuItem title="Database" icon={Database} href="/karyawan" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserNav />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
