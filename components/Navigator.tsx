'use client';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { FaSun } from 'react-icons/fa';
import { GiBrazilFlag } from 'react-icons/gi';
import { useLang } from '@/contexts/LangContext';
import { useTheme } from '@/contexts/ThemeProvider';
import TXT from '@/lib/strings';

export function Navigator() {
  const { lang, toggleLang } = useLang();
  const { mode, setMode } = useTheme();

  return (
    <nav className="flex flex-row z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex py-4 md:py-10 mb-12">
      <p
        id="LOGO SUPERLIB"
        className="font-burtons mt-2 text-2xl flex flex-row"
      >
        SUPERLIB
        <p className="mx-2 text-base text-ORANGE dark:text-EMERALD">@</p>
        <a
          href="https://jmfant.in"
          target="_blank"
          className="text-base hover:cursor-pointer hover:border-b-2 border-ORANGE dark:border-EMERALD"
        >
          JMFANT
          <span className="mr-0.5 text-base text-ORANGE dark:text-EMERALD">
            •
          </span>
          IN
        </a>
      </p>

      <ul id="TOGGLES TEMA E IDIOMA" className="flex items-center">
        <li id="TOGGLE TEMA">
          {mode === 'dark' ? (
            <BsFillMoonStarsFill
              onClick={() => {
                setMode('light');
                localStorage.removeItem('theme');
              }}
              className="text-CYAN cursor-pointer text-2xl hover:text-EMERALD transition-colors ease-in-out"
            />
          ) : (
            <FaSun
              onClick={() => {
                setMode('dark');
                localStorage.removeItem('theme');
              }}
              className="text-ROSE cursor-pointer text-3xl hover:text-ORANGE transition-colors ease-in-out"
            />
          )}
        </li>
        <li id="TOGGLE IDIOMA">
          {lang.iso === 'PT' ? (
            <GiBrazilFlag
              onClick={toggleLang}
              className="bg-gradient-to-r  from-EMERALD text-amber-300 via-sky-600 to-EMERALD hover:dark:to-sky-600  px-1 max-h-8 rounded-md cursor-pointer text-4xl transition-colors ease-in-out ml-4 md:ml-8"
            />
          ) : (
            <LiaFlagUsaSolid
              onClick={toggleLang}
              className="bg-gradient-to-br text-ROSE  dark:text-CYAN cursor-pointer text-4xl dark:hover:text-sky-600 transition-colors ease-in-out ml-4 md:ml-8"
            />
          )}
        </li>
      </ul>

      <div
        id="BOTAO SELECAO COMPONENTE"
        className="flex w-full h-10 items-center justify-center 
            bg-gradient-to-br from-ROSE to-ORANGE backdrop-blur-2xl border-IRON 
            hover:bg-gradient-to-tl hover:cursor-pointer transition-colors ease-in-out
          dark:border-PAPER dark:from-CYAN dark:to-EMERALD fixed bottom-0 left-0 md:static md:w-auto  md:rounded-xl border p-4 md:ml-8 lg:dark:bg-zinc-800/30"
      >
        {TXT('EXEMPLO')}
      </div>
    </nav>
  );
}
