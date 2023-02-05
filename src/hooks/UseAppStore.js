import * as React from 'react';

import {AppContext} from 'stores/app/App.store';

export const useAppStore = () => React.useContext(AppContext);
