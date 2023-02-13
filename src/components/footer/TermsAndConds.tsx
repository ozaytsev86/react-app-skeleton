import {Helmet} from 'react-helmet';

import {Heading, Text} from 'evergreen-ui';

import {localeTermsAndConditions} from 'constants/locale/TermsAndConditions';

export const TermsAndConds = () => {
  return (
    <div className="p--4">
      <div className="pb--2">
        <Helmet><title>{localeTermsAndConditions.TermsAndConditions}</title></Helmet>
        <Heading size={600}>{localeTermsAndConditions.TermsAndConditions}</Heading>
        <Text className="display--block pb--2">{localeTermsAndConditions.TermsAndConditionsText1}</Text>
      </div>
    </div>
  );
};
