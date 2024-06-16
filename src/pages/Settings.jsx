import SettingsForm from '../features/settings/SettingsForm';
import Row from '../ui/Row';
import Heading from '../ui/Heading'

export const Settings = () => {
  return (
    <Row>
      <Heading as="h1">Update Hotel Settings here !</Heading>
      <SettingsForm />
    </Row>
  );
};
