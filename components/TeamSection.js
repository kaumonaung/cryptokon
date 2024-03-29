import React from 'react';
import Image from 'next/image';
import Thundanor from '../public/assets/Thundanor.png';
import Klohokkar from '../public/assets/Klohokkar.png';

const TeamSection = () => {
  return (
    <div className='max-w-5xl mx-auto py-20 md:py-0'>
      <h2 className='text-slate-100 italic font-bold text-3xl md:text-2xl lg:text-3xl uppercase tracking-wider leading-10 pb-5 text-center'>
        The Team
      </h2>

      <div className='md:flex justify-center'>
        <div className='py-5'>
          <div className='max-w-xs mx-auto px-10 py-5'>
            <Image
              src={Thundanor}
              alt='CryptoKon Team Kmon'
              quality={100}
              className='text-white rounded'
            />
          </div>
          <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-transparent bg-clip-text text-3xl text-center'>
            thundanor
          </p>
          <p className='text-slate-400 text-center py-3'>Design & Build</p>
        </div>

        <div className='py-5'>
          <div className='max-w-xs mx-auto px-10 py-5'>
            <Image
              src={Klohokkar}
              alt='CryptoKon Team Mokkar'
              quality={100}
              className='text-white rounded'
            />
          </div>
          <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-transparent bg-clip-text text-3xl text-center'>
            klohokkar
          </p>
          <p className='text-slate-400 text-center py-3'>Concept Artist</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
