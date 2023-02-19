import {IconType} from 'react-icons';
import {useMatch, useNavigate, useResolvedPath} from 'react-router-dom';

import {Button} from 'evergreen-ui';

import {UNIT_3} from 'constants/StyleVariables';
import './navbar-link.css';

interface NavbarLinkProps {
  path: string
  text: string
  Icon: IconType
}

export const NavbarLink = ({path, text, Icon}: NavbarLinkProps) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(path);
  const match = useMatch({path: resolved.pathname, end: true});

  return (
    <Button
      appearance="minimal"
      onClick={() => navigate(path)}
      className={(match != null) ? 'navbar-active-link' : ''}
    >
      <Icon fontSize={UNIT_3} className="mr--1" />{text}
    </Button>
  );
};
