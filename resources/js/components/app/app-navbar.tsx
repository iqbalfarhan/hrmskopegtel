import { Link, usePage } from '@inertiajs/react';
import { Bell } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';
import { ModeToggle } from './mode-toggle';

const AppNavbar = () => {
  const { component } = usePage();
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {component.split('/').map((item, index) => (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2 px-4">
        <Button size={'icon'} variant={'outline'}>
          <Link href={route('notification.index')}>
            <Bell />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default AppNavbar;
