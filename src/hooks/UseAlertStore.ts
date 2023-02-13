import * as React from 'react';

import {AlertContext} from 'stores';

export const useAlertStore = () => React.useContext(AlertContext);
