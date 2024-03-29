import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <div className='flex justify-center my-16'>
      <div className='max-w-5xl mx-10 bg-gradient-to-tl from-rose-500 to-pink-500 rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 md:px-5 items-center py-10'>
          <h2 className='text-white font-bold uppercase tracking-wide text-3xl text-center'>
            Get Access
          </h2>
          <p className='text-white'>
            The NFT drop will be soon announced. To get your CryptoKon, check
            our social channels to find out when the drop will take place.
          </p>
          <Link href='/mint'>
            <a className='mx-auto self-center px-14 md:px-10 py-3 uppercase text-base font-bold tracking-wide bg-white rounded text-rose-500 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-rose-700'>
              Mint Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
