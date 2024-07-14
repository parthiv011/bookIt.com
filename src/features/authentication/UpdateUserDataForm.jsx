import { useState } from 'react';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';

function UpdateUserDataForm() {
  const {
    user: { id, email, firstName, lastName },
  } = useUser();
  // console.log(id);

  const { updateUser, isUpdating } = useUpdateUser();

  const [fname, setFname] = useState(firstName);
  const [lname, setLname] = useState(lastName);
  const [Avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // if (!fname || !lname || !Avatar) return;
    updateUser(
      { id, fname, lname, Avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }
  function handleCancel() {
    setFname(firstName);
    setLname(lastName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="First name">
        <Input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          id="firstname"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Last name">
        <Input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          id="lastname"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
