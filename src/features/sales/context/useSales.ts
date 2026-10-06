import { useContext } from 'react';

import { SalesContext } from '@/features/sales/context/SalesContext';

export function useSales() {
  const context = useContext(SalesContext);

  if (!context) throw new Error('useSales must be used within a SalesContextProvider');

  return context;
}
