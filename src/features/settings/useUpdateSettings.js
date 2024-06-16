import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSettings } from '../../services/apiSettings';
export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: mutateUpdate, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success('Settings Updated!');
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutateUpdate, isUpdating };
}
