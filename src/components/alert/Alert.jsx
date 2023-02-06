import * as React from 'react';

import './Alert.css';
import {locale} from 'constants/locale/EsEs';

const AlertDefaultProps = {
  testId: 'alert',
  id: 0,
  type: 'info',
  icon: 'info-circle',
  message: '',
  msec: 0
};

export const Alert = ({
  testId,
  id,
  type,
  message,
  msec,
  onRemoveAlert
}) => {
  const timebarRef = React.useRef();

  React.useEffect(() => {
    if (msec) {
      timebarRef.current.addEventListener('animationend', function onAnimationEnd() {
        timebarRef.current.removeEventListener('animationend', onAnimationEnd);
        onRemoveAlert(id);
      });
    }
  }, []);

  const handleAlertDismiss = () => {
    onRemoveAlert(id);
  };

  return (
    <div
      id={id}
      data-test-id={`${testId}-container-${id}`}
      className={`
        c-alert
        c-alert-${type}
      `}
      onClick={handleAlertDismiss}
    >
      <div className="display--flex width--100 box-shadow">
        <p
          data-test-id={`${testId}-message-${id}`}
          className="p--4">
          {message}
        </p>
        <span className="c-alert-close">{locale.clickToClose}</span>
        {msec > 0 && (
          <div
            ref={timebarRef}
            className="c-alert-timebar"
            style={{animationDuration: `${msec / 1000}s`}}
          />
        )}
      </div>
    </div>
  );
};

Alert.defaultProps = AlertDefaultProps;
