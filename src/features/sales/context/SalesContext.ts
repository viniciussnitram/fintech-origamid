import { createContext } from 'react';

import type { Sales } from '@/features/sales/types';

export interface SalesContextValue {
  data: Sales[] | null;
  isLoading: boolean;
  error: string | null;
}

export const SalesContext = createContext<SalesContextValue | null>(null);
