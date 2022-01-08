import Toggle from 'react-toggle';
import { useColorScheme } from './useColorScheme';
import {RiMoonClearFill} from 'react-icons/ri';
import {FaSun} from 'react-icons/fa';

const ColorSchemeToggle = () => {
  let { isDark, setIsDark } = useColorScheme();
  return (
      <Toggle
        className='dark-mode-toggle'
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{ checked: <RiMoonClearFill />, unchecked: <FaSun /> }}
        aria-label="Dark mode"
      />
  );
};

export default ColorSchemeToggle;