import Logo from 'assets/Logo.png';
import {Avatar, Button, Heading} from 'evergreen-ui';

import {locale} from 'constants/locale/EsEs';
import {UNIT_16} from 'constants/StyleVariables';

const Login = () => {
  const handleOAuthLogin = async () => {

  };

  return (
    <div
      className="
        display--flex
        justify-content--center
        align-items--center
        width--100
        height--full-content
      "
    >
      <div
        className="
        display--flex
        flex-direction--col
        justify-content--center
        align-items--center
        border-radius--lg
        p--4
        width--300px
        bg--white
        box-shadow
        text-align--center
      "
    >
        <Avatar src={Logo} size={UNIT_16 * 2} />
        <Heading size={900} className="p--4">{locale.Login}</Heading>

        <Button width="60%" appearance="primary" onClick={() => handleOAuthLogin('google')}>
          {locale.Google}
        </Button>
      </div>
    </div>
  );
};

export default Login;
