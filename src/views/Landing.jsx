import * as React from 'react';
import {Helmet} from 'react-helmet';

import {Loading} from 'components';

import {locale} from 'constants/locale/EsEs';

import LandingContent from './LandingContent';
import LandingSubscription from './LandingSubscription';

const Landing = () => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  const handleOnImageLoaded = () => setIsImageLoaded(true);

  return (
    <>
      <Helmet><title>{`${locale.Gigeds} - ${locale.GigedsSlogan}`}</title></Helmet>
      <Loading isVisible={!isImageLoaded} />
      <div className={`u-mt--4-minus ${isImageLoaded ? 'a-fade-in' : 'u-display--none'}`}>
        <LandingContent onImageLoaded={handleOnImageLoaded} />
        <LandingSubscription
          onImageLoaded={handleOnImageLoaded}
        />
      </div>
    </>
  );
};

export default Landing;
