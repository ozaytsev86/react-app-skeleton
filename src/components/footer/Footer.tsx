import * as React from 'react';

import {Button, Heading, SideSheet} from 'evergreen-ui';
import {BiCopyright} from 'react-icons/bi';

import {locale} from 'constants/locale/EsEs';
import {UNIT_2} from 'constants/StyleVariables';

import {isSm} from 'utils/ScreenSize';

import {PrivacyPolicy} from './PrivacyPolicy';
import {TermsAndConds} from './TermsAndConds';

export const Footer = () => {
  const [isVisiblePrivacyPolicy, setIsVisiblePrivacyPolicy] = React.useState<boolean>(false);
  const [isVisibleTermsAndConds, setIsVisibleTermsAndConds] = React.useState<boolean>(false);

  return (
    <div
      className="
        position--fixed
        bottom--0
        left--0
        display--flex
        align-items--center
        justify-content--space-between
        p--2
        bg--white
        height--48px
        width--100
        box-shadow
      "
    >
      <div
        className="
          display--flex
          align-items--center
          justify-content--center
        "
      >
        <Heading size={200} paddingRight={UNIT_2}><BiCopyright /> {locale.Skeleton} {new Date().getFullYear()}</Heading>
        <Button appearance="minimal" size="small" onClick={() => setIsVisiblePrivacyPolicy(true)}>{locale.PrivacyPolicy}</Button>
        <Button appearance="minimal" size="small" onClick={() => setIsVisibleTermsAndConds(true)}>{locale.TermsAndConds}</Button>
      </div>
      <SideSheet width={isSm() ? '260px' : '600px'} isShown={isVisiblePrivacyPolicy} onCloseComplete={() => setIsVisiblePrivacyPolicy(false)}>
        <PrivacyPolicy />
      </SideSheet>
      <SideSheet width={isSm() ? '260px' : '600px'} isShown={isVisibleTermsAndConds} onCloseComplete={() => setIsVisibleTermsAndConds(false)}>
        <TermsAndConds />
      </SideSheet>
    </div>
  );
};
