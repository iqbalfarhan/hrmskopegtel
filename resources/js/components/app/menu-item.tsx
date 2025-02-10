import { Link } from '@inertiajs/react';
import { ElementType, FC } from 'react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';

type MenuItemProps = {
  title: string;
  icon: ElementType;
  href: string;
  show?: boolean;
};

const MenuItem: FC<MenuItemProps> = ({ title, icon, href, show = true }) => {
  if (!show) return null;
  const Icon = icon;
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href={href}>
            <Icon />
            <span>{title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default MenuItem;
