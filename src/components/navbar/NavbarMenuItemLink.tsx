import {IconType} from 'react-icons';
import {useMatch, useNavigate, useResolvedPath} from 'react-router-dom';

import {Menu, Pane} from 'evergreen-ui';
import './navbar-link.css';

interface NavbarMenuItemLinkProps {
  path: string
  text: string
  Icon: IconType
}

export const NavbarMenuItemLink = ({path, text, Icon}: NavbarMenuItemLinkProps) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(path);
  const match = useMatch({path: resolved.pathname, end: true});

  return (
    <Menu.Item onClick={() => navigate(path)}>
      <Pane display="flex" alignItems="center" className={match ? 'navbar-active-link' : ''}>
        <Icon className="u-mr-1" />{text}
      </Pane>
    </Menu.Item>
  );
};
