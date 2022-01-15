import React from 'react';
import Image from 'next/image';
import NFT1 from '../public/assets/CryptoKon_1.png';
import NFT2 from '../public/assets/CryptoKon_2.png';
import NFT3 from '../public/assets/CryptoKon_3.png';
import NFT4 from '../public/assets/CryptoKon_4.png';

const WelcomeSection = () => {
  return (
    <div className='max-w-5xl mx-auto my-20 px-10 md:flex flex-row gap-10 items-center'>
      <div className='md:basis-1/2'>
        <h1 className='text-slate-100 font-bold text-3xl uppercase tracking-wider py-3'>
          Welcome to CryptoKon
        </h1>
        <p className='text-slate-400'>
          Aliquam consequat posuere ultricies. Aenean vitae nunc sodales mauris
          aliquam mollis. In varius accumsan tortor laoreet pulvinar. Nam varius
          est feugiat pulvinar placerat.
        </p>
        <br />
        <p className='text-slate-400'>
          Phasellus ultricies vehicula tellus, sit amet sollicitudin tellus
          auctor in. Nulla mollis finibus lorem vitae egestas. Sed vel urna
          orci. Quisque placerat ex ante, non rutrum eros vulputate eu.
        </p>
      </div>

      <div className='md:basis-1/2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 py-10 lg:px-5'>
        <Image
          src={NFT1}
          alt='CryptoKon NFT #1'
          quality={100}
          className='text-white rounded'
        />
        <Image
          src={NFT2}
          alt='CryptoKon NFT #2'
          quality={100}
          className='text-white rounded'
        />
        <Image
          src={NFT3}
          alt='CryptoKon NFT #3'
          quality={100}
          className='text-white rounded'
        />
        <Image
          src={NFT4}
          alt='CryptoKon NFT #4'
          quality={100}
          className='text-white rounded'
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
