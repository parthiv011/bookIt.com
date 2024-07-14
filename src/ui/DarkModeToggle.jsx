import { useDarkMode } from '../context/DarkModeContext';
import ButtonIcon from '../ui/ButtonIcon';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

const DarkModeToggle = () => {
  const { isDarkMode, ToggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={ToggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
