import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShotiFeed from '../ShotiFeed';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ShotiFeedExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShotiFeed />
    </QueryClientProvider>
  );
}