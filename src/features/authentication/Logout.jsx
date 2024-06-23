import { HiOutlineLogout } from 'react-icons/hi';
import ButtonIcon from '../../ui/ButtonIcon';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

export const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiOutlineLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
};
