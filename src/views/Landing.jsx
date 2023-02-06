import {Helmet} from 'react-helmet';

import {useAppStore} from 'hooks';

const Landing = () => {
  const {userInfo} = useAppStore();

  return (
    <>
      <Helmet><title>Landing View</title></Helmet>
      <p>Your name is: {userInfo?.name}</p>
    </>
  );
};

export default Landing;
