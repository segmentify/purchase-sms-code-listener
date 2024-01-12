import { IndexPage } from './pages';
import { SegmentifyQueryProvider } from './providers';

export default function App() {
  return (
    <SegmentifyQueryProvider>
      <IndexPage />
    </SegmentifyQueryProvider>
  );
}
