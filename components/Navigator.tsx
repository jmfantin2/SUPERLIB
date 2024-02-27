'use client';

import TXT from '@/lib/strings';
import { ThemeSwitch } from './ThemeSwitch';
import { LangSwitch } from './LangSwitch';

export function Navigator() {
  return (
    <nav className="flex flex-row z-10 w-full items-center justify-between font-mono text-sm lg:flex py-4 md:py-10 mb-12">
      <p
        id="LOGO SUPERLIB"
        className="font-burtons mt-2 text-2xl flex flex-row text-IRON dark:text-PAPER"
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

      <div
        id="BOTAO SELECAO COMPONENTE"
        className="flex w-full h-10 items-center justify-center 
            bg-gradient-to-br from-ROSE to-ORANGE backdrop-blur-2xl border-2 border-IRON 
            hover:bg-gradient-to-tl hover:cursor-pointer transition-colors ease-in-out
          dark:border-PAPER dark:from-CYAN dark:to-EMERALD fixed bottom-0 left-0 md:static md:w-auto  md:rounded-xl p-4 md:ml-8 lg:dark:bg-zinc-800/30 md:mr-32"
      >
        {TXT('EXEMPLO')}
      </div>

      <ul id="SWITCH TEMA E IDIOMA" className="flex items-center">
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <LangSwitch />
        </li>
      </ul>
    </nav>
  );
}
