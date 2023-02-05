import * as React from 'react';

import {AlertContext} from '../stores/alert/Alert.store';

export const useAlertStore = () => React.useContext(AlertContext);
