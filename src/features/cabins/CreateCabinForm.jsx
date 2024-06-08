import styled from 'styled-components';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import { TextArea } from '../../ui/TextArea';
import { FileInput } from '../../ui/FileInput';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-bottom: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-700);
`;
export const CreateCabinForm = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { isLoading, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin created successfully!');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function submitHandler(data) {
    console.log('data', data);
    mutate(data);
  }
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow>
        <Label htmlFor="name">Cabin Name</Label>
        <Input type="text" id="name" {...register('name')} />
      </FormRow>
      <FormRow>
        <Label htmlFor="maxCapacity">Maximum Capacity</Label>
        <Input type="number" id="maxCapacity" {...register('maxCapacity')} />
      </FormRow>
      <FormRow>
        <Label htmlFor="regularPrice">Regular Price</Label>
        <Input type="number" id="regularPrice" {...register('regularPrice')} />
      </FormRow>
      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount')}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="description">Description for Website</Label>
        <TextArea
          type="number"
          id="description"
          defaultValue=""
          {...register('description')}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" type="text" {...register('image')} />
      </FormRow>

      <FormRow>
        <Button variations="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Edit Cabin</Button>
      </FormRow>
    </Form>
  );
};
