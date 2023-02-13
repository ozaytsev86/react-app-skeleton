import {Helmet} from 'react-helmet';

import {Heading, Text} from 'evergreen-ui';

import {localePrivacyPolicy} from 'constants/locale/PrivacyPolicy';

export const PrivacyPolicy = () => {
  return (
    <div className="p--4">
      <div className="pb--2">
        <Helmet><title>{localePrivacyPolicy.PrivacyPolicy}</title></Helmet>
        <Heading size={600}>{localePrivacyPolicy.PrivacyPolicy}</Heading>
        <Text className="display--block pb--2">{localePrivacyPolicy.PrivacyPolicyText1}</Text>
      </div>
    </div>
  );
};
