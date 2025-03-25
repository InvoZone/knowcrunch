'use client';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { AppStore } from '../lib/store';
import { makeStore } from '../lib/store';

export default function StoreProvider({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
