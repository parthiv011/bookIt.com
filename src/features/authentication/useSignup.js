import { useMutation } from '@tanstack/react-query';
import { register as registerApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: registerApi,
    onSuccess: (user) => {
      const name = user.newUser.firstName;
      toast.success(`Welcome, ${name}! You have successfully signed up.`);
    },
  });
  return { signUp, isLoading };
}
