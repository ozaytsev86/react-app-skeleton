import {errorMessages} from 'constants/Messages';

export const getMessage = (key: string) => errorMessages[key];
