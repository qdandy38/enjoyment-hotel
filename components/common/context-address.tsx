'use client';
import { useEffect } from 'react';
import { useCommonCtx } from '@/providers/common-provider';
function ContextAddress(data: any) {
  const { setAddressOptionData } = useCommonCtx();
  useEffect(() => {
    setAddressOptionData(data);
  }, [data]);
  return null;
}

export default ContextAddress;
