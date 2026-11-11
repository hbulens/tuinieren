import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Theme = 'light' | 'dark' | null;

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<Theme>('huerto-theme', null);

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
  }, [theme]);

  const toggle = () => {
    const isDark = theme ? theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label="Donkere modus aan/uit">
      Thema
    </button>
  );
}
