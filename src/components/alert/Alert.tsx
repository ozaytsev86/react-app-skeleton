import * as React from 'react';

import './Alert.css';
import {locale} from 'constants/locale/EsEs';

interface AlertProps {
  testId?: string
  id: string
  type?: string
  message: string
  msec?: number
  onRemoveAlert: (id: string) => void
}

export const Alert = ({
  testId = 'alert',
  id,
  type = 'info',
  message,
  msec = 0,
  onRemoveAlert
}: AlertProps) => {
  const timebarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (msec && timebarRef.current) {
      timebarRef.current.addEventListener('animationend', function onAnimationEnd() {
        // @ts-expect-error it won't be undefined
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
