import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Label } from '../ui/label';

type FormControlProps = PropsWithChildren & {
  error?: string;
  horizontal?: boolean;
  label?: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const FormControl: FC<FormControlProps> = ({
  children,
  error,
  label,
  horizontal,
  className,
}) => {
  return (
    <div
      className={cn(
        'grid w-full items-center gap-2',
        horizontal && 'grid-cols-4 gap-4',
        className,
      )}
    >
      <Label className={cn(horizontal && 'text-right')}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default FormControl;
