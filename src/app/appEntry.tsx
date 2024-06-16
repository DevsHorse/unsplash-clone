import ReactDOM from 'react-dom/client';
import '@/app/styles/globalStyles.css';
import { StoreProvider } from './providers/store';
import { SearchProvider } from './providers/search';
import { AppRouter } from './providers/router';

const rootElement = document.getElementById('root');

if (!(rootElement instanceof HTMLElement)) {
  throw new Error('The application should have a root element!');
}

ReactDOM.createRoot(rootElement).render(
  <StoreProvider>
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  </StoreProvider>
);
