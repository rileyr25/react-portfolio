import Toggle from 'react-toggle';
import { useColorScheme } from './useColorScheme';
import {RiMoonClearFill} from 'react-icons/ri';
import {FaSun} from 'react-icons/fa';

const ColorSchemeToggle: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{ checked: <FaSun />, unchecked: <RiMoonClearFill /> }}
        aria-label="Dark mode"
      />
  );
};

export default ColorSchemeToggle;