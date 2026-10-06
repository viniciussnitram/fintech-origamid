import { createContext } from 'react';

import type { Sale } from '@/features/sales/types';

export interface SalesContextValue {
  data: Sale[] | null;
  isLoading: boolean;
  error: string | null;
}

export const SalesContext = createContext<SalesContextValue | null>(null);
