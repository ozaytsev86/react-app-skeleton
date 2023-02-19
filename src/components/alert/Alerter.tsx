import {TransitionGroup} from 'react-transition-group';

import {Alert} from 'components';
import {$TSFixMe} from 'types';

import FadeTransition from './FadeTransition';

interface AlerterProps {
  alerts: $TSFixMe,
  onRemoveAlert: (id: string) => void
}

export const Alerter = ({
  alerts,
  onRemoveAlert
}: AlerterProps) => {
  const AlerterItems = Object.keys(alerts).map(key => {
    return (
      // @ts-expect-error all good
      <FadeTransition key={key}>
        <Alert {...alerts[key]} onRemoveAlert={onRemoveAlert} />
      </FadeTransition>
    );
  });

  return (
    <div className="c-alerter">
      <TransitionGroup
        className="
          u-display--flex
          u-flex-direction--col
          u-align-items--flex-end
        "
      >
        {AlerterItems}
      </TransitionGroup>
    </div>
  );
};
