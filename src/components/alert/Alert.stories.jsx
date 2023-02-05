import {
  Button, AlertContainer, Alert, Icon
} from 'components';
import {useAlertStore} from 'hooks';
import {AlertStoreProvider} from 'stores';

export default {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: {Icon}
};

const AlertStory = () => {
  const {
    createSuccessAlert, createInfoAlert, createWarningAlert, createErrorAlert
  } = useAlertStore();

  return (
    <>
      <AlertContainer />
      <Button secondary text="Success" className="u-mr--2" onClick={() => createSuccessAlert('Success message')} />
      <Button secondary text="Error" className="u-mr--2" onClick={() => createErrorAlert('Error message')} />
      <Button secondary text="Info" className="u-mr--2" onClick={() => createInfoAlert('Info message')} />
      <Button secondary text="Warning" className="u-mr--2" onClick={() => createWarningAlert('Warning message')} />
    </>
  );
};

export const All = () => {
  return (
    <AlertStoreProvider>
      <AlertStory />
    </AlertStoreProvider>
  );
};
