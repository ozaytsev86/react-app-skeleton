import * as React from 'react';

import {AppContext} from 'stores';

export const useAppStore = () => React.useContext(AppContext);
