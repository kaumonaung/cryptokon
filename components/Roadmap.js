import React from 'react';
import Image from 'next/image';
import Ticket from '../public/assets/Golden_Tickets.png';

const Roadmap = () => {
  return (
    <div className='max-w-5xl mx-auto py-10'>
      <div>
        <h2 className='text-slate-100 italic font-bold text-4xl uppercase tracking-wider py-5 px-10'>
          CryptoKon Roadmap
        </h2>
        <p className='text-slate-400 max-w-2xl px-10'>
          Aliquam consequat posuere ultricies. Aenean vitae nunc sodales mauris
          aliquam mollis. In varius accumsan tortor laoreet pulvinar. Nam varius
          est feugiat pulvinar placerat. Phasellus ultricies vehicula tellus,
          sit amet sollicitudin tellus auctor in. Nulla mollis finibus lorem
          vitae egestas.
        </p>
      </div>

      <div className='md:flex flex-row items-center'>
        <div className='grid grid-cols-2 max-w-5xl mx-auto py-16'>
          <div className='grid grid-cols-8 gap-10 items-center col-span-2 px-10 pb-5'>
            <div className='col-span-3 sm:col-span-2'>
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl'>
                10%
              </p>
            </div>
            <div className='col-span-5 sm:col-span-6 text-slate-300'>
              Nulla mollis finibus lorem vitae egestas.
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl'>
                30%
              </p>
            </div>
            <div className='col-span-5 sm:col-span-6 text-slate-300'>
              Nulla mollis finibus lorem vitae egestas.
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl'>
                50%
              </p>
            </div>
            <div className='col-span-5 sm:col-span-6 text-slate-300'>
              Phasellus ultricies vehicula tellus, sit amet sollicitudin tellus
              auctor in. Nulla mollis finibus lorem vitae egestas.
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl'>
                80%
              </p>
            </div>
            <div className='col-span-5 sm:col-span-6 text-slate-300'>
              Phasellus ultricies vehicula tellus, sit amet sollicitudin tellus
              auctor in. Nulla mollis finibus lorem vitae egestas.
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl'>
                90%
              </p>
            </div>
            <div className='col-span-5 sm:col-span-6 text-slate-300'>
              Phasellus ultricies vehicula tellus, sit amet sollicitudin tellus
              auctor in.
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-medium text-transparent bg-clip-text text-xl'>
                100%
              </p>
            </div>
            <div className='col-span-5 sm:col-span-6 text-slate-300'>
              Phasellus ultricies vehicula tellus, sit amet sollicitudin tellus
              auctor in.
            </div>
          </div>
        </div>

        <div className='px-10 max-w-xs mx-auto'>
          <Image
            src={Ticket}
            alt='CryptoKon Rarity Specs'
            quality={100}
            className='text-white rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
