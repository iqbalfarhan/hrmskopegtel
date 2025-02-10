import { Absensi } from '@/types/absensi';
import { usePage } from '@inertiajs/react';
import CheckInCard from './CheckInCard';

const KaryawanHome = ({ absensi }: { absensi: Absensi }) => {
  const user = usePage().props.auth.user;
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <CheckInCard user={user} absensi={absensi} />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          fugit quod non corporis provident, sed iure quos tenetur odio? At quam
          amet eligendi. Nam aut accusantium omnis facere molestiae optio.
        </div>
      </div>
    </>
  );
};

export default KaryawanHome;
