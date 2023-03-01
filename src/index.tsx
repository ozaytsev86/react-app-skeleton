import './styles/App.css';

import {BrowserRouter} from 'react-router-dom';

import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from 'configs/ReactQueryConfig';
import {createRoot} from 'react-dom/client';
import {AppStoreProvider} from 'stores';

import {App} from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render((
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppStoreProvider>
        <App />
      </AppStoreProvider>
    </QueryClientProvider>
  </BrowserRouter>
));
