import '@/styles/global.css';

import { Summary } from '@/app/routes/Summary';
import { Header } from '@/components/layouts/Header';
import { SideNav } from '@/components/layouts/SideNav';

export function App() {
  return (
    <div>
      <SideNav />
      <Header />
      <Summary />
    </div>
  );
}
