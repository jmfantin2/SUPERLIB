import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { PiTriangleDuotone } from 'react-icons/pi';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
  //! these are needed for server-side verification
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  //! useEffect only runs in the client, which means the component will be mounted as soon as it runs
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <PiTriangleDuotone className="text-2xl text-slate-500" />;

  if (resolvedTheme === 'dark') {
    return (
      <BsFillMoonStarsFill
        onClick={() => {
          setTheme('light');
        }}
        className="text-CYAN cursor-pointer text-2xl hover:text-EMERALD transition-colors ease-in-out"
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <FaSun
        onClick={() => {
          setTheme('dark');
        }}
        className="text-ROSE cursor-pointer text-3xl hover:text-ORANGE transition-colors ease-in-out"
      />
    );
  }
}
