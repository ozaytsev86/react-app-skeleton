import {useMatch, useNavigate, useResolvedPath} from 'react-router-dom';

import {Button} from 'evergreen-ui';

import {UNIT_3} from 'constants/StyleVariables';
import './navbar-link.css';

export const NavbarLink = ({path, text, Icon}) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(path);
  const match = useMatch({path: resolved.pathname, end: true});

  return (
    <Button appearance="minimal" onClick={() => navigate(path)} className={match ? 'navbar-active-link' : ''}>
      <Icon fontSize={UNIT_3} className="mr--1" />{text}
    </Button>
  );
};
