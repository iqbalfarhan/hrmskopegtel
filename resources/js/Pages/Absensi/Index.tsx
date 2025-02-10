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
import { Link } from '@inertiajs/react';
import { addBusinessDays, format } from 'date-fns';
import {
  Calendar as CalendarIcon,
  Download,
  EllipsisVertical,
} from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import UserPopover from '../User/Partial/UserPopover';
import AbsensiFilter from './Partials/AbsensiFilter';
import AbsensiShow from './Partials/AbsensiShow';
import ApproveToggler from './Partials/ApproveToggler';
import TerlambatBadge from './Partials/TerlambatBadge';

const AbsensiIndex = ({ absensis }: { absensis: Absensi[] }) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addBusinessDays(new Date(), 20),
  });

  return (
    <Authenticated
      header="List absensi"
      actions={
        <>
          <AbsensiFilter />
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
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      {/* <pre>{JSON.stringify(absensis, null, 2)}</pre> */}

      <Card>
        <Table>
          <TableBody>
            {absensis.map((absen, index) => (
              <TableRow key={index}>
                <TableCell>
                  <UserPopover user={absen.user!} />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{moment(absen.tanggal).format('DD MMMM YYYY')}</span>
                    <div></div>
                  </div>
                </TableCell>
                <TableCell>
                  <TerlambatBadge terlambat={absen.terlambat} />
                </TableCell>
                <TableCell>
                  {moment(absen.checkin).format('HH:mm')}
                  {' - '}
                  {moment(absen.checkout).format('HH:mm')}
                </TableCell>
                <TableCell>8 jam 12 menit</TableCell>
                <TableCell>
                  <ApproveToggler absensi={absen} />
                </TableCell>
                <TableCell className="flex justify-end">
                  <AbsensiShow absensi={absen} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={'icon'} variant={'ghost'}>
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          className="w-full"
                          href={route('absensi.destroy', absen.id)}
                          method="delete"
                          preserveScroll
                        >
                          Delete
                        </Link>
                      </DropdownMenuItem>
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
