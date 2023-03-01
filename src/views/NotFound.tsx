import {Helmet} from 'react-helmet';

import {locale} from 'constants/locale/EnUs';

import Img404 from 'assets/404.png';

const NotFound = () => (
  <section>
    <Helmet><title>{locale.PageNotFoundCapitalized}</title></Helmet>

    <img alt="Error 404" src={Img404} style={{width: '100%'}} />
  </section>
);

export default NotFound;
