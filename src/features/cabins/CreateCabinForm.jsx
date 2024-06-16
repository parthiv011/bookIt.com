import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import FileInput from '../../ui/FileInput';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';

export const CreateCabinForm = ({ cabinToEdit = {} }) => {
  const { isCreating, mutateCabin } = useCreateCabin();
  const { isEditing, mutateEdit } = useEditCabin();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function submitHandler(data) {
    // console.log({ image: data.image[0] });
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    console.log(image);

    if (isEditSession)
      mutateEdit(
        { newCabinData: { ...data, image: image }, id: editId },
        {
          onSuccess: () => reset(),
        }
      );
    else
      mutateCabin(
        { ...data, image: image },
        {
          onSuccess: () => reset(),
        }
      );
  }

  function errorHandler(err) {
    // console.log(err);
  }

  return (
    <Form onSubmit={handleSubmit(submitHandler, errorHandler)}>
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'This is Required Field',
          })}
        />
      </FormRow>
      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This is Required Field',
            min: {
              value: 1,
              message: 'Capacity should be atleast 1',
            },
          })}
        />
      </FormRow>
      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This is Required Field',
            min: {
              value: 1,
              message: 'Capacity should be atleast 1',
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register('discount', {
            required: 'This is Required Field',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount cannot be greater then regular Price',
          })}
        />
      </FormRow>
      <FormRow
        label={'Description for Website'}
        error={errors?.description?.message}
      >
        <TextArea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register('description', {
            required: 'This is Required Field',
          })}
        />
      </FormRow>
      <FormRow label="Cabin Photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register('image', {
            required: 'This is Required Field',
          })}
        />
      </FormRow>

      <FormRow>
        <Button variations="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit Cabin' : 'Add new Cabin'}
        </Button>
      </FormRow>
    </Form>
  );
};
