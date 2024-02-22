import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export const TransparansiPengelolaanComponent = () => {
  return (
    <div className='flex justify-between items-center p-4 max-w-6xl mx-auto'>
      <div className='flex flex-col space-y-2.5'>
        <div className='text-lg font-bold'>
          <span className='text-orange-500'>Transparansi</span> Pengelolaan
          <br />
          Dana Umat
        </div>
        <div className='text-sm font-medium w-96 pb-2'>
          Kami terus berupaya meningkatkan dan menjaga kepercayaan donatur Yatim
          Mandiri
        </div>
        <button className='inline-flex items-center space-x-3 rounded-md w-56 px-4 py-3 text-sm bg-orange-500 text-white'>
          <span className='text-xs font-medium w-44 text-left'>
            Lihat Laporan & Audit Keuangan
          </span>
          <div className='p-1 rounded bg-white'>
            <Image
              src={'/assets/images/logo_color.png'}
              alt='logo'
              width={30}
              height={30}
            />
          </div>
        </button>

        <div className='text-xs pt-2'>
          Yatim Mandiri rutin menyerahkan laporan audit keuangan ke:
        </div>
        <div className='flex items-center space-x-4'>
          <Image
            src={'https://picsum.photos/40/40'}
            alt='logo-basnas'
            width={40}
            height={40}
          />
          <Image
            src={'https://picsum.photos/40/40'}
            alt='logo-kemenag'
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className='flex flex-col relative'>
        {/* <div className='absolute w-56 h-56 rounded-md border border-black'>
          Kotak
        </div>
        <div className='absolute -left-14 w-56 h-56 rounded-md border border-blue-500'>
          Kotak
        </div>
         */}
        {/* <Image
          src={'https://picsum.photos/200/200'}
          alt='logo-kemenag'
          width={200}
          height={200}
          className='relative -left-24 right-0 top-0 -bottom-24'
        />
        <Image
          src={'https://picsum.photos/200/200'}
          alt='logo-kemenag'
          width={200}
          height={200}
          className='relative -left-8 right-0 -top-24 bottom-0 z-10'
        />
        <div className='relative left-0 right-0 -top-40 -bottom-24 h-24 rounded-md border border-black'>
          Kotak
        </div>
        <div className='relative left-0 right-0 -top-40 -bottom-24 h-24 rounded-md border border-black'>
          Kotak
        </div> */}
      </div>
    </div>
  );
};
