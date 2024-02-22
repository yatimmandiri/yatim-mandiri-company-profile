import Image from 'next/image';
import React from 'react';

export const ProgramKamiComponent = () => {
  const programList = [
    {
      id: 1,
      name: 'Program 1',
    },
    {
      id: 2,
      name: 'Program 2',
    },
    {
      id: 3,
      name: 'Program 3',
    },
    {
      id: 4,
      name: 'Program 4',
    },
    {
      id: 5,
      name: 'Program 5',
    },
  ];

  return (
    <section className='max-w-6xl mx-auto flex flex-col space-y-4 pt-8 pb-8'>
      <div className='text-lg font-bold border-l-8 pl-2 border-orange-500'>
        Program Kami
      </div>
      <div className='text-sm pb-4'>
        Yatim Mandiri mempunyai 5 pilar program yang akan terus <br /> dibawa
        dengan tujuan kemakmuran dan kemandirian yatim <br /> dhuafa
      </div>
      <div className='grid grid-cols-5 gap-4 justify-items-center text-center'>
        {programList.map((item, i) => (
          <div
            key={i}
            className='flex flex-col space-y-2 rounded-md bg-orange-500 text-white'
          >
            <Image
              src={'https://picsum.photos/600/600'}
              alt='logo'
              width={600}
              height={600}
              className='w-full'
            />
            <span className='pb-2'>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
