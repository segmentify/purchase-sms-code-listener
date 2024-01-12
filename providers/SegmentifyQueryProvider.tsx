import { Platform } from 'react-native';

import { useAppState, useOnlineManager } from '../hooks';

import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';

import type { AppStateStatus } from 'react-native';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export const SegmentifyQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useOnlineManager();
  useAppState(onAppStateChange);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
