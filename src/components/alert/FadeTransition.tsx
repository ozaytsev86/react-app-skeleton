import * as React from 'react';
import {Transition} from 'react-transition-group';

import PropTypes from 'prop-types';

const FadeTransitionPropTypes = {
  in: PropTypes.bool,
  duration: PropTypes.number,
  children: PropTypes.node
};

const FadeTransitionDefaultProps = {
  in: false,
  duration: 300,
  children: null
};

class FadeTransition extends React.Component {
  defaultStyles = {
    opacity: 0,
    // eslint-disable-next-line react/destructuring-assignment
    transition: `opacity ${this.props.duration}ms ease-in-out`
  };

  transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1}
  };

  render() {
    const {
      in: inProp, duration, children, ...rest
    } = this.props;

    return (
      <Transition {...rest} in={inProp} timeout={duration}>
        {state => <div style={{...this.defaultStyles, ...this.transitionStyles[state]}}>{children}</div>}
      </Transition>
    );
  }
}

FadeTransition.propTypes = FadeTransitionPropTypes;
FadeTransition.defaultProps = FadeTransitionDefaultProps;

export default FadeTransition;
