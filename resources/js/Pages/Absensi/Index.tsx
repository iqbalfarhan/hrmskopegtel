import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/lib/utils';
import { Absensi } from '@/types/absensi';
import { format } from 'date-fns';
import {
  Calendar as CalendarIcon,
  Download,
  EllipsisVertical,
  ExternalLink,
  Filter,
} from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';

const AbsensiIndex = ({ absensis }: { absensis: Absensi[] }) => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Authenticated
      header="List absensi"
      actions={
        <>
          <Button>
            <Filter />
            Filter
          </Button>
          <Button>
            <Download />
            Download
          </Button>
        </>
      }
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Card>
        <Table>
          <TableBody>
            {absensis.map((absen, index) => (
              <TableRow key={index}>
                <TableCell>{absen.id}</TableCell>
                <TableCell>{absen.user?.name}</TableCell>
                <TableCell>
                  {moment(absen.tanggal).format('DD MMMM YYYY')}
                </TableCell>
                <TableCell>
                  {moment(absen.checkin).format('HH:mm:ss')}
                </TableCell>
                <TableCell>
                  {moment(absen.checkout).format('HH:mm:ss')}
                </TableCell>
                <TableCell>
                  {absen.approved && <Badge>Approved</Badge>}
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button variant={'secondary'}>
                    Detail absensi <ExternalLink />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={'icon'} variant={'ghost'}>
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Detail</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Hapus</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Authenticated>
  );
};

export default AbsensiIndex;
