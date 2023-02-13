import {Alerter} from 'components';
import {useAlertStore} from 'hooks';

export const AlertContainer = () => {
  const {alerts, removeAlert} = useAlertStore();

  return (
    <Alerter alerts={alerts} onRemoveAlert={removeAlert} />
  );
};
