import * as React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

import {
  Avatar, Badge, Heading, Menu, Popover, Position, SideSheet
} from 'evergreen-ui';
import {useAppStore} from 'hooks';
import {
  BiEnvelope, BiCog, BiHome, BiInfoCircle, BiLogIn, BiLogOut, BiUser
} from 'react-icons/bi';
import {isSm} from 'utils';
import About from 'views/About';

import {locale} from 'constants/locale/EsEs';
import {Routes} from 'constants/Routes';
import {UNIT_1, UNIT_3, UNIT_8} from 'constants/StyleVariables';

import Logo from 'assets/Logo.png';

import {NavbarLink} from './NavbarLink';
import {NavbarMenuItemLink} from './NavbarMenuItemLink';

export const Navbar = () => {
  const {userInfo} = useAppStore();
  const navigate = useNavigate();

  const [isVisibleAboutSideSheet, setIsVisibleAboutSideSheet] = React.useState<boolean>(false);

  const handleLogout = async () => {
    navigate(Routes.Root);
  };

  return (
    <div
      className="
        display--flex
        align-items--center
        justify-content--space-between
        p--2
        bg--white
        box-shadow
      "
    >

      <NavLink to={Routes.Root} className="display--flex align-items--center text-decoration--none">
        <Avatar src={Logo} size={UNIT_8} className="mr--2" />
        <Heading size={500} className="mr--2 hide--sm">{locale.Skeleton}</Heading>
        <Badge className="display--flex align-self--baseline color--alt-1">{locale.AlfaUppercase}</Badge>
      </NavLink>

      {!userInfo && (
        <div className="mr--2">
          <NavbarLink Icon={BiLogIn} path={Routes.Login} text={locale.Login} />
        </div>
      )}
      {userInfo && (
        <>
          <div className="display--flex align-items--center">
            <div className="mr--2">
              <NavbarLink Icon={BiHome} path={Routes.Root} text={locale.Home} />
              <NavbarLink Icon={BiEnvelope} path={Routes.Contact} text={locale.Contact} />
            </div>
            <Popover
              position={Position.BOTTOM_RIGHT}
              content={
                <Menu>
                  <Menu.Group>
                    <Heading size={200} paddingX={UNIT_3} paddingBottom={UNIT_1}>{locale.LoggedWith}</Heading>
                    <Heading size={400} paddingX={UNIT_3} fontWeight="bold">{userInfo.name}</Heading>
                  </Menu.Group>
                  <Menu.Divider />
                  <Menu.Group>
                    <NavbarMenuItemLink Icon={BiUser} path={Routes.Profile} text={locale.Profile} />
                    <NavbarMenuItemLink Icon={BiCog} path={Routes.Settings} text={locale.Settings} />
                  </Menu.Group>
                  <Menu.Divider />
                  <Menu.Group>
                    <Menu.Item onClick={() => setIsVisibleAboutSideSheet(true)}>
                      <div className="display--flex align-items--center">
                        <BiInfoCircle className="mr--1" />{locale.About}
                      </div>
                    </Menu.Item>
                  </Menu.Group>
                  <Menu.Divider />
                  <Menu.Group>
                    <Menu.Item onClick={handleLogout}>
                      <div className="display--flex align-items--center">
                        <BiLogOut className="mr--1" />{locale.Logout}
                      </div>
                    </Menu.Item>
                  </Menu.Group>
                </Menu>
              }
            >
              <Avatar size={UNIT_8} src={userInfo.sprites.front_default} className="cursor-pointer" />
            </Popover>
          </div>
          <SideSheet width={isSm() ? '260px' : '600px'} isShown={isVisibleAboutSideSheet} onCloseComplete={() => setIsVisibleAboutSideSheet(false)}>
            <About />
          </SideSheet>
        </>
      )}
    </div>
  );
};
