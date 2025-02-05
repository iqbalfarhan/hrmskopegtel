import AppNavbar from '@/components/app/app-navbar';
import Authenticated from '@/Layouts/AuthenticatedLayout';

const SettingIndex = () => {
  return (
    <Authenticated header={'Pengaturan'}>
      <AppNavbar />
    </Authenticated>
  );
};

export default SettingIndex;
