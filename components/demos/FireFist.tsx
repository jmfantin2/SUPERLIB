import Image from 'next/image';

type FireFistProps = {
  mode: 'full' | 'hand';
};

export function FireFist({ mode }: FireFistProps) {
  return (
    <div className="mb-10 md:mb-20 mx-auto bg-gradient-to-br rotate-45 from-transparent via-transparent to-ROSE/50 dark:from-transparent dark:via-transparent dark:to-CYAN/50 w-48 h-48 relative overflow-y-hidden md:h-96 md:w-96">
      <Image
        alt=""
        src={mode === 'full' ? '/alchemist.webp' : '/fire_fist.png'}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
