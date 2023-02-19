import {ReactElement} from 'react';
import {Transition} from 'react-transition-group';

interface FadeTransitionProps {
  duration: number,
  children: ReactElement | null
}

const FadeTransition = ({
  duration = 300,
  children = null
}: FadeTransitionProps) => {
  const defaultStyles = {
    opacity: 0,
    // eslint-disable-next-line react/destructuring-assignment
    transition: `opacity ${duration}ms ease-in-out`
  };

  const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1}
  };

  return (
    <Transition in={false} timeout={duration}>
      {/*// @ts-expect-error its ok */}
      {state => <div style={{...defaultStyles, ...transitionStyles[state]}}>{children}</div>}
    </Transition>
  );
};

export default FadeTransition;
