import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export const Account = () => {
  return (
    <>
      <Heading as="h1">Update your Account</Heading>
      <Row>
        <Heading as="h3">Update User Data</Heading>
        <UpdateUserDataForm />
      </Row>
    </>
  );
};
