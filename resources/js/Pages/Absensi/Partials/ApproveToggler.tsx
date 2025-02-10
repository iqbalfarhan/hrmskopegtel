import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Absensi } from '@/types/absensi';
import { useForm } from '@inertiajs/react';
import { FunctionComponent } from 'react';

interface ApproveTogglerProps {
  absensi: Absensi;
}

const ApproveToggler: FunctionComponent<ApproveTogglerProps> = ({
  absensi,
}) => {
  const { toast } = useToast();
  const { data, put } = useForm({
    approved: absensi.approved,
  });

  const onApproveChange = (value: boolean) => {
    data.approved = value;
    put(route('absensi.update', absensi.id), {
      onSuccess: () => {
        toast({
          title: `Absensi ${value ? 'Approved' : 'Not Approved'}`,
          description: 'Status approve absensi berhasil diubah',
        });
      },
      onError: () => {
        toast({
          title: 'Error',
          description: 'Terjadi kesalahan saat mengubah status approve',
          variant: 'destructive',
        });
      },
      preserveScroll: true,
    });
  };

  return (
    <Label className="flex items-center gap-2">
      <Switch
        defaultChecked={data.approved}
        onCheckedChange={onApproveChange}
      />
      Approved
    </Label>
  );
};

export default ApproveToggler;
