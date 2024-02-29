import TXT from '@/lib/strings';
import { SpinningTriangle } from './SpinningTriangle';
import { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import shapeshifter from 'classnames';

export function ExamplesDropdown() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); //only runs in the client = indicates it has mounted
  //! these are needed for server-side verification

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return mounted ? (
    <>
      <a
        id="BOTAO SELECAO COMPONENTE"
        onClick={toggleDropdown}
        className="flex w-full h-10 items-center justify-center fixed bottom-0 left-0
        p-4 md:ml-8 md:mr-32 md:static md:w-auto md:rounded-xl backdrop-blur-2xl border-2
        transition-colors ease-in-out hover:opacity-90 hover:cursor-pointer
        from-ROSE to-ORANGE  border-IRON/20 bg-gradient-to-br
        dark:from-CYAN dark:to-EMERALD dark:border-PAPER/50"
      >
        {TXT('LISTA_DE_EXEMPLOS')}{' '}
        <IoMdArrowDropdown
          className={shapeshifter('text-2xl ml-2', {
            'rotate-180': isOpen,
          })}
        />
      </a>
      {isOpen && (
        <div
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          py-4 px-20 max-h-96 border-2 border-b-8 shadow-2xl rounded-b-xl overflow-y-auto no-scrollbar
          bg-PAPER/70 text-IRON border-ORANGE border-b-ROSE 
          dark:bg-IRON/70 dark:text-PAPER dark:border-CYAN dark:border-b-EMERALD"
          onClick={toggleDropdown}
        >
          {/* Your dropdown content here */}
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="py-2 w-full">
              Option {i + 1}
            </div>
          ))}
        </div>
      )}
    </>
  ) : (
    <SpinningTriangle />
  );
}
