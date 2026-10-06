import type { PropsWithChildren } from 'react';

import { SALES_API_URL } from '@/features/sales/api';
import { SalesContext } from '@/features/sales/context/SalesContext';
import type { Sales } from '@/features/sales/types';
import { useFetch } from '@/hooks/useFetch';

export function SalesContextProvider({ children }: PropsWithChildren) {
  const { data, isLoading, error } = useFetch<Sales[]>(SALES_API_URL);

  return (
    <SalesContext.Provider value={{ data, isLoading, error }}>{children}</SalesContext.Provider>
  );
}
