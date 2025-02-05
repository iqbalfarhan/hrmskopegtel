import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

const UpdatePhotoProfile = () => {
  const { post, progress } = useForm({
    photo: null,
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    post('/users');
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Photo</CardTitle>
        <CardDescription>Tipe file yang diterima jpg</CardDescription>
      </CardHeader>
      <form onSubmit={submit}>
        <CardContent>
          <Input type="file" accept="images/*" />
          {progress && (
            <progress value={progress.percentage} max="100">
              {progress.percentage}%
            </progress>
          )}
        </CardContent>
        <CardFooter>
          <Button>Upload</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UpdatePhotoProfile;
