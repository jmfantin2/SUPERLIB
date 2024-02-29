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
          className={shapeshifter('hidden md:block text-2xl ml-2', {
            'rotate-180': isOpen,
          })}
        />
      </a>
      {isOpen && (
        <div
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          p-2 w-[50%] max-w-[300px] h-[70vh] border-2 border-b-8 shadow-2xl rounded-b-3xl overflow-y-auto no-scrollbar
          bg-PAPER/80 text-IRON border-ORANGE border-b-ROSE 
          dark:bg-IRON/80 dark:text-PAPER dark:border-CYAN dark:border-b-EMERALD"
          onClick={toggleDropdown}
        >
          {/* Your dropdown content here */}
          {elements.map((element) => (
            <div key={element.id} className="py-2 w-full text-center">
              <p className="border-b-2 bg-ORANGE/20 border-ROSE/40 dark:bg-CYAN/20 dark:border-EMERALD/40 cursor-pointer">
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
  { id: 0, title: 'INTRODUÇÃO' },
  { id: 1, title: 'GALLERY' },
  { id: 2, title: 'LANG SWITCHER' },
  { id: 3, title: 'FLAME LOADER' },
  { id: 4, title: 'GALLERY' },
  { id: 5, title: 'LANG SWITCHER' },
  { id: 6, title: 'FLAME LOADER' },
  { id: 7, title: 'GALLERY' },
  { id: 8, title: 'LANG SWITCHER' },
  { id: 9, title: 'FLAME LOADER' },
  { id: 10, title: 'GALLERY' },
  { id: 11, title: 'LANG SWITCHER' },
  { id: 12, title: 'FLAME LOADER' },
  { id: 13, title: 'GALLERY' },
  { id: 14, title: 'LANG SWITCHER' },
  { id: 15, title: 'FLAME LOADER' },
  { id: 16, title: 'GALLERY' },
  { id: 17, title: 'LANG SWITCHER' },
];