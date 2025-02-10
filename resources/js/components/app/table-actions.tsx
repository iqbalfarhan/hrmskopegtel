import { FC, PropsWithChildren } from 'react';

type TableActionsprops = PropsWithChildren;

const TableActions: FC<TableActionsprops> = ({ children }) => {
  return <div className="flex justify-end gap-1">{children}</div>;
};

export default TableActions;
