'use client';
import { PropsWithChildren, createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import useResize from '@/hooks/useResize';

interface CommonContext {
  isMobile: boolean;
  addressOptionData: {
    data: any[];
  };
  setAddressOptionData: any;
}
const CommonContext = createContext({} as CommonContext);

function CommonProvider({ children }: PropsWithChildren) {
  const [isMobile, setIsMobile] = useState(true);
  const [addressOptionData, setAddressOptionData] = useState({
    data: [],
  });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useResize(handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <CommonContext.Provider value={{ isMobile, addressOptionData, setAddressOptionData }}>
      {children}
    </CommonContext.Provider>
  );
}

export const useCommonCtx = () => useContext(CommonContext);
export default CommonProvider;
