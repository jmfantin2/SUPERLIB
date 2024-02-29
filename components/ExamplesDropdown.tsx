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
        className="z-20 flex w-full h-10 items-center justify-center fixed bottom-0 left-0 md:left-1/2 group select-none
        p-4 md:ml-8 md:mr-32 md:static md:w-auto md:rounded-xl backdrop-blur-2xl border-2
        transition-colors ease-in-out hover:opacity-90 hover:cursor-pointer
        from-ROSE to-ORANGE  border-IRON/20 bg-gradient-to-br
        dark:from-CYAN dark:to-EMERALD dark:border-PAPER/50"
      >
        {TXT('LISTA_DE_EXEMPLOS')}{' '}
        <IoMdArrowDropdown
          className={shapeshifter(
            'hidden md:block text-2xl ml-2 transition-transform group-hover:translate-y-1 motion-reduce:transform-none',
            {
              'rotate-180 group-hover:-translate-y-1': isOpen,
            }
          )}
        />
      </a>
      {isOpen && (
        <div
          className="absolute rotate-180 md:rotate-0 z-10 top-2/3 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none
          p-2 w-[50%] max-w-[300px] max-h-[50vh] border-2 border-b-8 shadow-2xl rounded-b-3xl overflow-y-auto 
          bg-PAPER/80 text-IRON border-ORANGE border-b-ROSE backdrop-blur-md
          dark:bg-IRON/80 dark:text-PAPER dark:border-CYAN dark:border-b-EMERALD"
          onClick={toggleDropdown}
        >
          {/* Your dropdown content here */}
          {elements.map((element) => (
            <div
              key={element.id}
              className="py-2 w-full text-center rotate-180 md:rotate-0"
            >
              <p className="border-b-2 bg-ORANGE/20 border-ROSE/40 dark:bg-CYAN/20 dark:border-EMERALD/40 cursor-pointer hover:font-bold hover:text-ROSE dark:hover:text-EMERALD hover:bg-whirl_light dark:hover:bg-whirl_dark">
                {element.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  ) : (
    <SpinningTriangle />
  );
}

const elements = [
  { id: 0, title: 'intro' },
  { id: 1, title: 'THIS DROPDOWN' },
  { id: 2, title: 'FIRE FIST' },
  { id: 3, title: 'FLAME LOADER' },
  { id: 4, title: 'THEME SWITCH' },
  { id: 5, title: 'LANG SWITCH' },
  { id: 6, title: 'MONSTER FLOPPY DISK' },
  { id: 7, title: 'sample' },
  { id: 8, title: 'sample' },
  { id: 9, title: 'sample' },
  { id: 10, title: 'sample' },
  { id: 11, title: 'sample' },
  { id: 12, title: 'sample' },
  { id: 13, title: 'sample' },
  { id: 14, title: 'sample' },
];
