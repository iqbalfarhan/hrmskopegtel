import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Absensi } from '@/types/absensi';
import { ExternalLink } from 'lucide-react';
import moment from 'moment';
import TerlambatBadge from './TerlambatBadge';

const AbsensiShow = ({ absensi }: { absensi: Absensi }) => {
  const { tanggal, checkin, checkout, user } = absensi;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>
          Detail absensi <ExternalLink />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Absensi tanggal {moment(tanggal).format('D MMMM YYYY')}
          </DialogTitle>
          <DialogDescription>Detail absensi</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-bold opacity-50">Nama</Label>
            <div className="">{user?.name}</div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Duration</Label>
            <div className="">8 Hours 16 Minutes</div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Check In Time</Label>
            <div className="text-2xl font-mono font-bold">
              {moment(checkin).format('HH:mm')}
            </div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Check Out Time</Label>
            <div className="text-2xl font-mono font-bold">
              {moment(checkout).format('HH:mm')}
            </div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Status absensi</Label>
            <div>
              <TerlambatBadge terlambat={absensi.terlambat} />
            </div>
          </div>
          <div>
            <Label className="font-bold opacity-50">Approved ?</Label>
            <div>{absensi.approved ? 'Diterima' : 'Belum diterima'}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AbsensiShow;
