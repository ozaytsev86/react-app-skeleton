import './styles/App.css';

import {QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {createRoot} from 'react-dom/client';

import {queryClient} from './configs/ReactQueryConfig';
import {AlertStoreProvider, AppStoreProvider} from 'stores';
import {App} from './App';

const container = document.getElementById('root');
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
