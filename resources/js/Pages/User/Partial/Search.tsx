import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { FC } from 'react';

type SearchUserProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchUser: FC<SearchUserProps> = ({ search, setSearch }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Search />
          Search
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cari user</DialogTitle>
          <DialogDescription>
            Tuliskan nama, email atau nomor telepon user yang ingin dicari
          </DialogDescription>
        </DialogHeader>
        <Input
          placeholder="pencarian"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchUser;
