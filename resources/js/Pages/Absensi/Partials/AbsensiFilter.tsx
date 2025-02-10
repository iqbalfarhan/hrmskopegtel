import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const AbsensiFilter = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <Filter />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter absensi</SheetTitle>
          <SheetDescription>
            Pilah pilih data absensi berdasarkan status keterlambatan dan status
            approve absensi.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          fugiat rem quibusdam doloremque sed unde delectus, quas eveniet odio
          quis et id commodi in fugit explicabo repellat ea odit recusandae!
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AbsensiFilter;
