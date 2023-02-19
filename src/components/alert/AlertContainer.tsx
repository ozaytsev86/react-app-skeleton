import {Alerter} from 'components';
import {useAlertStore} from 'hooks';

export const AlertContainer = () => {
  // @ts-expect-error type
  const {alerts, removeAlert} = useAlertStore();

  return (
    <Alerter alerts={alerts} onRemoveAlert={removeAlert} />
  );
};
