import { ThemeProvider } from '@/components/theme-provider';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col items-center justify-center bg-sidebar py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              <div>
                <Link href="/">HRMS Kopegtel</Link>
              </div>
            </CardTitle>
            <CardDescription>Human resources management system</CardDescription>
          </CardHeader>
          {children}
        </Card>
      </div>
    </ThemeProvider>
  );
}
