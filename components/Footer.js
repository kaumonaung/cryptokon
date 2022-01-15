import React from 'react';

const Footer = () => {
  return (
    <footer className=' border-t-2 border-slate-800'>
      <div className='text-slate-400 text-center mt-10 py-2'>
        ©2022 CryptoKon
      </div>
      <div className='flex justify-center gap-x-10 mb-5 py-2'>
        <a
          href=''
          className='py-3 px-2 focus:outline-none focus-visible:ring focus-visible:ring-rose-500'
        >
          <img
            src='/assets/Discord-Logo-White.svg'
            alt='CryptoKon Discord'
            className='h-5'
          />
        </a>

        <a
          href=''
          className='py-3 px-2 focus:outline-none focus-visible:ring focus-visible:ring-rose-500'
        >
          <img
            src='/assets/Twitter-Logo-White.svg'
            alt='CryptoKon Twitter'
            className='h-5'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
