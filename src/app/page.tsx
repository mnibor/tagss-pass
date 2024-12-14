'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const { toast } = useToast();

  const onClickFn = () => {
    toast({
      title: 'Toast de TagssPass',
      description: 'Friday, February 10, 2023 at 5:57 PM',
    });
  };

  return (
    <div>
      <h1 className="text-2xl">Aplicación general</h1>
      <Button variant="destructive">Destructive</Button>
      <Button onClick={onClickFn}>Show Toast</Button>
    </div>
  );
}
