import { Summary } from '@/app/routes/Summary';
import { Header } from '@/components/layouts/Header';
import { SideNav } from '@/components/layouts/SideNav';
import { DateRange } from '@/features/sales/components/DateRange';
import { SalesContextProvider } from '@/features/sales/context/SalesContextProvider';

export function App() {
  return (
    <SalesContextProvider>
      <div>
        <SideNav />
        <main>
          <Header>
            <DateRange />
          </Header>

          <Summary />
        </main>
      </div>
    </SalesContextProvider>
  );
}
