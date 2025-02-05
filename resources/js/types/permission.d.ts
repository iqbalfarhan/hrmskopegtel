export type Permission = {
  id: number;
  name: string;
  group: string | null;
  guard_name: string;
};

export type Role = {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
};
