import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import createPersistedState from 'use-persisted-state';


const useColorSchemeState = createPersistedState('colorScheme');

// useColorScheme hook below provided by Zain Sajjad (LogRocket) https://blog.logrocket.com/dark-mode-in-react-an-in-depth-guide/

export function useColorScheme(): {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
} {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );
  const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(() => isDark === undefined ? !!systemPrefersDark : isDark,
    [isDark, systemPrefersDark])
  useEffect(() => {
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [value]);
  return {
    isDark: value,
    setIsDark,
  };
}

