import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import CheckInCard from './Partials/CheckInCard';

export default function Dashboard() {
  const user = usePage().props.auth.user;

  return (
    <Authenticated header="Dashboard">
      <Head title="Dashboard" />
      <div className="flex items-center justify-center">
        <CheckInCard user={user} />
      </div>
    </Authenticated>
  );
}
