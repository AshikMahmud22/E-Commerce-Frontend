'use client';

import { Provider } from 'react-redux';
import { useState } from 'react';
import { makeStore } from './index';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}