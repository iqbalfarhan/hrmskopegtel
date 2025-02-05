import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Role } from '@/types/permission';
import { Perusahaan } from '@/types/perusahaan';
import { Filter } from 'lucide-react';
import { FC } from 'react';

type FilterUserProps = {
  search: string;
  setSearch: (search: string) => void;
  perusahaans: Perusahaan[];
  roles: Role[];
};

const FilterUser: FC<FilterUserProps> = ({
  search,
  setSearch,
  perusahaans,
  roles,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>
          <Filter />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent className="space-y-6">
        <SheetHeader>
          <SheetTitle>Filter user data</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, iure.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6">
          <FormControl label="Pencarian data">
            <Input
              placeholder="Cari nama"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormControl>
          <FormControl label="Perusahaan">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih perusahaan" />
              </SelectTrigger>
              <SelectContent>
                {perusahaans.map((perusahaan) => (
                  <SelectItem
                    key={perusahaan.id}
                    value={perusahaan.id.toString()}
                  >
                    {perusahaan.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormControl label="Role">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id.toString()}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </div>
        <SheetFooter>
          <Button>
            <Filter />
            Apply filter
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FilterUser;
