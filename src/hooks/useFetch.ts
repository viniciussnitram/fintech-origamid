import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- T describes the API response shape; no runtime validation yet (see Zod)no-unnecessary-type-parameters
export function useFetch<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      setError(null);

      try {
        const response = await fetch(url, {
          ...optionsRef.current,
          signal,
        });

        if (!response.ok) throw new Error(`Error: ${String(response.status)}`);

        const json = (await response.json()) as T;

        if (!signal.aborted) setData(json);
      } catch (err) {
        if (!signal.aborted) setError(err instanceof Error ? err.message : 'Unexpected error');
      } finally {
        if (!signal.aborted) setIsLoading(false);
      }
    };

    void fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}
