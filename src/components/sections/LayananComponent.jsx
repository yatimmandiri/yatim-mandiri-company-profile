import Image from 'next/image';

export const LayananItemComponent = ({ item }) => {
  return (
    <div className='w-full flex justify-start items-center space-x-4 px-3 py-4 text-sm font-medium rounded-xl border border-gray-300'>
      <Image
        src={'https://picsum.photos/40/40'}
        width={40}
        height={40}
        alt={item.name}
        className='rounded-full'
      />
      <span className='w-24'>{item.name}</span>
    </div>
  );
};

export const LayananComponent = () => {
  const dataLayanan = [
    {
      id: 1,
      name: 'Kalkulator Zakat',
    },
    {
      id: 2,
      name: 'Rekening Donasi',
    },
    {
      id: 3,
      name: 'Jemput Donasi',
    },
    {
      id: 4,
      name: 'Konfirmasi Donasi',
    },
    {
      id: 4,
      name: 'Bayar Zakat Online',
    },
  ];

  return (
    <section className='relative -top-10 flex justify-center items-center border rounded-xl shadow-md p-4 max-w-sm md:max-w-5xl mx-auto border-gray-200 bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 w-full'>
        {dataLayanan.map((item) => (
          <LayananItemComponent key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
