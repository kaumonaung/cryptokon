import React from 'react';
import Image from 'next/image';
import Rarity from '../public/assets/Rarity.gif';

const RaritySection = () => {
  return (
    <div className='flex justify-center my-32'>
      <div className='max-w-5xl w-screen mx-10 bg-slate-800 rounded-lg py-5 lg:py-20'>
        <div className='flex flex-col md:flex-row gap-10 px-10 py-10 lg:py-0 max-w-4xl mx-auto mb-5 lg:mb-16'>
          <div>
            <h2 className='text-slate-100 font-bold text-3xl md:text-2xl lg:text-3xl uppercase tracking-wider leading-10 pb-5'>
              The rarity specs of 10,000 CryptoKon NFTS
            </h2>
            <p className='text-slate-400'>
              Aliquam consequat posuere ultricies. Aenean vitae nunc sodales
              mauris aliquam mollis. In varius accumsan tortor laoreet pulvinar.
            </p>
            <br />
            <p className='text-slate-400'>
              Aliquam consequat posuere ultricies. Aenean vitae nunc sodales
              mauris aliquam mollis.
            </p>
          </div>

          <div className='max-w-xs mx-auto md:px-10'>
            <Image
              src={Rarity}
              alt='CryptoKon Rarity Specs'
              quality={100}
              className='text-white rounded'
            />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-y-12 gap-x-20 sm:max-w-lg md:max-w-2xl mx-auto px-10 py-10 lg:py-0'>
          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              7
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Backgrounds
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              33
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Skins
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              30
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Shoes
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              14
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Pants
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              96
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Upper Bodies
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              35
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Eyes
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              11
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Mouths
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              18
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Accessories
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-black text-transparent bg-clip-text text-5xl'>
              89
            </p>
            <p className='text-slate-300 font-medium text-lg uppercase tracking-wider'>
              Heads
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaritySection;
