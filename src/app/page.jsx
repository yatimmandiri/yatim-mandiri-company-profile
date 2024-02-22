import { JumbotronComponent } from '@/components/sections/JumbotronComponent';
import { LayananComponent } from '@/components/sections/LayananComponent';
import { TransparansiPengelolaanComponent } from '@/components/sections/TransparansiPengelolaanComponent';
import { AppLayout } from '@/layouts/AppLayout';

export default function HomePage() {
  return (
    <AppLayout>
      <JumbotronComponent />
      <LayananComponent />
      <TransparansiPengelolaanComponent />
    </AppLayout>
  );
}
