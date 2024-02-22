import Image from 'next/image';

export const JumbotronComponent = () => {
  return (
    <>
      <Image
        src={'https://picsum.photos/1024/1024'}
        alt='jumbotron'
        className='w-full h-[60vh] object-cover'
        width={1024}
        height={1024}
      />
    </>
  );
};
