import { Badge } from '@/components/ui/badge';
import { FC } from 'react';

type TerlambatBadgeProps = {
  terlambat: boolean;
};

const TerlambatBadge: FC<TerlambatBadgeProps> = ({ terlambat }) => {
  return (
    <Badge variant={terlambat ? 'destructive' : 'default'}>
      {terlambat ? 'Terlambat' : 'Tepat waktu'}
    </Badge>
  );
};

export default TerlambatBadge;
