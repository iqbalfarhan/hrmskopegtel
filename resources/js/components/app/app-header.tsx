import { FC, ReactNode } from 'react';
import { CardHeader, CardTitle } from '../ui/card';

type AppHeaderProps = {
  title: string;
  actions?: ReactNode;
};

const AppHeader: FC<AppHeaderProps> = ({ title, actions }) => {
  return (
    <div className="flex items-center justify-between">
      <CardHeader className="p-0">
        <CardTitle className="text-3xl">{title}</CardTitle>
        {/* <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae?
        </CardDescription> */}
      </CardHeader>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
};

export default AppHeader;
