import * as React from 'react';

import {Icon} from 'components';
import PropTypes from 'prop-types';

import {locale} from 'constants/locale/EsEs';

const AlertPropTypes = {
  /** Id for test purposes */
  testId: PropTypes.string,
  /** Unique id of the component */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Show the component with info, success, warning or error styles */
  type: PropTypes.string,
  /** Icon shown in the button. Eg: fa-globe or HiHeart or <HiHeart className="u-display-flex"/> */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
  /** Text to show in the component */
  message: PropTypes.string,
  /** Milliseconds to wait until hide the component */
  msec: PropTypes.number,
  /** Callback triggered on click on the component or when the time is over */
  onRemoveAlert: PropTypes.func.isRequired
};

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
  icon,
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
      <div className="u-display--flex u-width--100 u-box-shadow">
        <Icon icon={icon} className="c-alert-fa-icon" />
        <p
          data-test-id={`${testId}-message-${id}`}
          className="u-p--4">
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

Alert.propTypes = AlertPropTypes;
Alert.defaultProps = AlertDefaultProps;
