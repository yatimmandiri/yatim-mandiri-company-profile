import Image from 'next/image';
import { ButtonComponent } from '@/components/partials/ButtonComponent';

export const HeaderComponent = () => {
  const datamenu = [
    {
      id: 1,
      name: 'Tentang Kami',
    },
    {
      id: 2,
      name: 'Layanan',
    },
    {
      id: 3,
      name: 'Program',
    },
    {
      id: 4,
      name: 'Publikasi',
    },
    {
      id: 5,
      name: 'Partnership',
    },
    {
      id: 6,
      name: 'Media',
    },
  ];

  return (
    <header className='flex shadow-md h-16 justify-between items-center px-4 sm:px-6 max-w-3xl md:max-w-5xl mx-auto bg-blue-500'>
      <Image
        src={'/assets/images/logo_color.png'}
        alt='logo'
        width={50}
        height={50}
      />
      <ul className='hidden md:flex justify-between items-center space-x-6 text-xs font-medium'>
        {datamenu.map((menu, i) => (
          <li key={i}>{menu.name}</li>
        ))}
        <button className='inline-flex items-center justify-center px-8 py-2 rounded text-xs bg-orange-500 text-white'>
          Donasi
        </button>
      </ul>
    </header>
  );
};
