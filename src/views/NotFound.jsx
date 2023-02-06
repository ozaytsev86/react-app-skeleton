import {Helmet} from 'react-helmet';

import img404 from 'assets/404.png';

import {locale} from 'constants/locale/EsEs';

const NotFound = () => (
  <section>
    <Helmet><title>{locale.PageNotFoundCapitalized}</title></Helmet>

    <img alt="Error 404" src={img404} style={{width: '100%'}} />
  </section>
);

export default NotFound;
