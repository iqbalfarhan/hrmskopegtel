import FormControl from '@/components/app/form-control';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generatePassword } from '@/lib/utils';
import { FC, useState } from 'react';

type GeneratePasswordProps = {
  onApply: (newpass: string) => void;
};

const GeneratePassword: FC<GeneratePasswordProps> = ({ onApply }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const [length, setLength] = useState<number>(8);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [specialChars, setSpecialChars] = useState<boolean>(false);

  const generateRandom = () => {
    setPassword(generatePassword(length, { uppercase, numbers, specialChars }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Generate Password</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Password</DialogTitle>
          <DialogDescription>
            Password yang baru akan dihasilkan secara acak.
          </DialogDescription>
        </DialogHeader>

        <FormControl label="Password Length">
          <Input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </FormControl>
        <div className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            id="uppercase"
            checked={uppercase}
            onCheckedChange={(c) => setUppercase(c as boolean)}
          />
          <Label htmlFor="uppercase">Uppercase Letters</Label>
        </div>
        <div className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            id="numbers"
            checked={numbers}
            onCheckedChange={(c) => setNumbers(c as boolean)}
          />
          <Label htmlFor="numbers">Password with number</Label>
        </div>
        <div className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            id="specialChars"
            checked={specialChars}
            onCheckedChange={(c) => setSpecialChars(c as boolean)}
          />
          <Label htmlFor="specialChars">Password special character</Label>
        </div>

        <div>
          <Button variant="outline" onClick={generateRandom}>
            Generate Password
          </Button>
        </div>
        <div className="border p-6">
          <h1 className="text-center font-mono text-3xl font-bold">
            {password}
          </h1>
        </div>

        <DialogFooter className="justify-between">
          <Button
            onClick={() => {
              onApply(password);
              setOpen(false);
            }}
            disabled={password.length === 0}
          >
            Apply Password
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GeneratePassword;
