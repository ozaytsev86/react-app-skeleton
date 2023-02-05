import {TransitionGroup} from 'react-transition-group';

import {Alert} from 'components';
import PropTypes from 'prop-types';

import FadeTransition from './FadeTransition';

const AlerterPropTypes = {
  elmId: PropTypes.string,
  alerts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onRemoveAlert: PropTypes.func.isRequired
};
const AlerterDefaultProps = {
  elmId: '',
  alerts: {}
};

export const Alerter = ({
  elmId,
  alerts,
  onRemoveAlert
}) => {
  const AlerterItems = Object.keys(alerts).map(key => {
    return (
      <FadeTransition key={key}>
        <Alert {...alerts[key]} elmId={elmId} onRemoveAlert={onRemoveAlert} />
      </FadeTransition>
    );
  });

  return (
    <div className="c-alerter" data-elm-id={`${elmId}-container`}>
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

Alerter.propTypes = AlerterPropTypes;
Alerter.defaultProps = AlerterDefaultProps;
