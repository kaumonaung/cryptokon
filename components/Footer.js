import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Discord from '../public/assets/Discord-Logo-White.svg';
import Twitter from '../public/assets/Twitter-Logo-White.svg';

const Footer = () => {
  return (
    <footer className=' border-t-2 border-slate-800'>
      <div className='text-slate-400 text-center mt-10 py-2'>
        ©2022 CryptoKon
      </div>
      <div className='flex justify-center gap-x-10 mb-5 py-2'>
        <Link href='#' passHref>
          <a>
            <Image
              src={Discord}
              width={30}
              height={80}
              className='cursor-pointer'
              alt='Discord Logo'
            />
          </a>
        </Link>

        <Link href='#'>
          <a>
            <Image
              src={Twitter}
              width={30}
              height={80}
              className='cursor-pointer'
              alt='Twitter Logo'
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
