import React from 'react';
import Image from 'next/image';
import Kmon from '../public/assets/Kmon.png';

const TeamSection = () => {
  return (
    <div className='max-w-5xl mx-auto py-20 md:py-0'>
      <h2 className='text-slate-100 italic font-bold text-3xl md:text-2xl lg:text-3xl uppercase tracking-wider leading-10 pb-5 text-center'>
        The (Solo) Team
      </h2>

      <div className='flex justify-center'>
        <div className='max-w-xs px-10 py-5'>
          <Image
            src={Kmon}
            alt='CryptoKon Team Kmon'
            quality={100}
            className='text-white rounded'
          />
        </div>
      </div>

      <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-transparent bg-clip-text text-3xl text-center'>
        Kmon
      </p>
      <p className='text-slate-400 text-center py-3'>One man crypto army</p>
    </div>
  );
};

export default TeamSection;
