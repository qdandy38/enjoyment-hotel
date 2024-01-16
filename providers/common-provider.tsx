'use client';
import { PropsWithChildren, createContext, useContext, useState, useEffect } from 'react';
import useResize from '@/hooks/useResize';

interface CommonContext {
  isMobile: boolean;
}
const CommonContext = createContext({} as CommonContext);

function CommonProvider({ children }: PropsWithChildren) {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useResize(handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return <CommonContext.Provider value={{ isMobile }}>{children}</CommonContext.Provider>;
}

export const useCommonCtx = () => useContext(CommonContext);
export default CommonProvider;
