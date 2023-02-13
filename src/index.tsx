import './styles/App.css';

import {BrowserRouter} from 'react-router-dom';

import {QueryClientProvider} from '@tanstack/react-query';
import {createRoot} from 'react-dom/client';

import {App} from './App';
import {queryClient} from './configs/ReactQueryConfig';
import {AlertStoreProvider, AppStoreProvider} from './stores';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render((
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AlertStoreProvider>
        <AppStoreProvider>
          <App />
        </AppStoreProvider>
      </AlertStoreProvider>
    </QueryClientProvider>
  </BrowserRouter>
));
