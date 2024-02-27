import TXT from '@/lib/strings';
import { SpinningTriangle } from './SpinningTriangle';
import { useState, useEffect } from 'react';

export function ExampleSelector() {
  //! these are needed for server-side verification
  const [mounted, setMounted] = useState(false);

  //! useEffect only runs in the client, which means the component will be mounted as soon as it runs
  useEffect(() => setMounted(true), []);
  return mounted ? (
    <div
      id="BOTAO SELECAO COMPONENTE"
      className="flex w-full h-10 items-center justify-center 
      bg-gradient-to-br from-ROSE to-ORANGE backdrop-blur-2xl border-2 border-IRON/30 
      hover:bg-gradient-to-tl hover:cursor-pointer transition-colors ease-in-out
    dark:border-PAPER/50 dark:from-CYAN dark:to-EMERALD fixed bottom-0 left-0 md:static md:w-auto  md:rounded-xl p-4 md:ml-8 lg:dark:bg-zinc-800/30 md:mr-32"
    >
      {TXT('EXEMPLO')}
    </div>
  ) : (
    <SpinningTriangle />
  );
}
