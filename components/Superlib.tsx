import { useEffect, useState } from 'react';
import shapeshifter from 'classnames';
import { SpinningTriangle } from './SpinningTriangle';

export function Superlib() {
  //! these are needed for server-side verification
  const [mounted, setMounted] = useState(false);

  //! useEffect only runs in the client, which means the component will be mounted as soon as it runs
  useEffect(() => setMounted(true), []);

  return (
    <p
      id="LOGO SUPERLIB"
      className="font-burtons mt-2 text-2xl flex flex-row text-IRON dark:text-PAPER"
    >
      SUPERLIB
      {mounted ? (
        <>
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
        </>
      ) : (
        <SpinningTriangle />
      )}
    </p>
  );
}
