import { useEffect, useState } from 'react';

import theme from '../themes';

const useMobileHook = (maxSize = 'lg') => {
  const hasWindow = typeof window !== 'undefined';

  const [width, setWidth] = useState(hasWindow ? window.innerWidth : 0);

  function handleWindowSizeChange () {
    setWidth(hasWindow ? window.innerWidth : 0);
  }

  useEffect(() => {
    if (hasWindow) {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChange);

      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }

    return () => {};
  }, []);

  return width <= theme.breakpoints[maxSize as keyof typeof theme.breakpoints];
};

export default useMobileHook;
