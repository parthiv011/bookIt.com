import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import { Spinner } from '../../ui/Spinner';
import { useGetSettings } from './useGetSettings';
import { useUpdateSettings } from './useUpdateSettings';

const SettingsForm = () => {
  const {
    isLoading,
    settings: {
      breakfast,
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
    } = {},
  } = useGetSettings();

  const { isUpdating, mutateUpdate } = useUpdateSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    mutateUpdate({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label={'Minimum nights/bookings'}>
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label={'Maximum nights/bookings'}>
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
        />
      </FormRow>
      <FormRow label={'Maximum guests/bookings'}>
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
        />
      </FormRow>
      <FormRow label={'Breakfast Price'}>
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfast}
          onBlur={(e) => handleUpdate(e, 'breakfast')}
        />
      </FormRow>
    </Form>
  );
};

export default SettingsForm;
