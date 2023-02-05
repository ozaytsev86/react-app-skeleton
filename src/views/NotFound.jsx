import {Helmet} from 'react-helmet';

import {capitalize} from 'utils';

import {locale} from 'constants/locale/EsEs';

const NotFound = () => (
  <section>
    <Helmet><title>{capitalize(locale.pageNotFound)}</title></Helmet>
    <article>
      <header>
        <h2>
          {locale.ERROR}
          <span>404</span>
        </h2>
      </header>
      <p>{locale.pageNotFound}</p>
    </article>
  </section>
);

export default NotFound;
