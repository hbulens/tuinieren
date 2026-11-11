import { useEffect, useState } from 'react';

/** useState that persists to localStorage. Falls back silently when storage is unavailable. */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? initial : (JSON.parse(raw) as T);
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode or blocked storage: keep working in memory */
    }
  }, [key, value]);

  return [value, setValue] as const;
}
