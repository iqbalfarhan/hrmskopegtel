import AppHeader from '@/components/app/app-header';
import AppNavbar from '@/components/app/app-navbar';
import AppSidebar from '@/components/app/app-sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren, ReactNode } from 'react';

export default function Authenticated({
  children,
  header = 'Page Header',
  actions,
}: PropsWithChildren<{ header: string; actions?: ReactNode }>) {
  //   const user = usePage().props.auth.user;

  return (
    <ThemeProvider>
      <SidebarProvider className="scrollbar-hide">
        <AppSidebar />
        <SidebarInset>
          <AppNavbar />
          <main className="space-y-6 p-6">
            <AppHeader title={header} actions={actions} />
            {children}
            <Toaster />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
