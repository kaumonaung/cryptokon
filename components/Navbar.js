import React, { useState, useEffect } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { ConnectButton } from './ConnectButton';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const [onMinting, setOnMinting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { account, active } = useWeb3React();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == '/mint') {
      setOnMinting(true);
    }
  }, []);

  return (
    <nav>
      <div className='max-w-6xl mx-auto px-5 py-9'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href='/'>
              <img
                src='/assets/Logo_Light.svg'
                alt='CryptoKon Logo'
                className='h-6 md:h-8'
              />
            </Link>
          </div>

          {!onMinting && active && (
            <Link href='/mint'>
              <a className='hidden md:block text-white font-bold text-xl uppercase tracking-wider hover:text-rose-500'>
                Mint Now
              </a>
            </Link>
          )}

          <div className='items-center space-x-2 text-white hidden md:flex'>
            <a href='' className='py-3 px-2'>
              <img
                src='/assets/Discord-Logo-White.svg'
                alt='CryptoKon Discord'
                className='h-5'
              />
            </a>
            <a href='' className='py-3 px-2'>
              <img
                src='/assets/Twitter-Logo-White.svg'
                alt='CryptoKon Twitter'
                className='h-5'
              />
            </a>
            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-lg text-transparent bg-clip-text'>
              {account ? `${account.substring(0, 6)}...` : ''}
            </p>
            <ConnectButton />
          </div>

          {/* Mobile Button */}
          <div className='md:hidden items-center'>
            <button onClick={() => setIsMobile(!isMobile)}>
              <MenuIcon className='w-6 h-6 text-white' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Goes Here */}
      <div className={`${isMobile ? 'block' : 'hidden'} text-white md:hidden`}>
        {!onMinting && active && (
          <Link href='/mint'>
            <a className='block md:hidden text-white font-bold text-lg uppercase tracking-wide hover:text-rose-500 hover:bg-slate-800 py-4 px-8'>
              Mint Now
            </a>
          </Link>
        )}
        <a
          href=''
          className='flex space-x-3 items-center py-5 px-8 text-sm hover:bg-slate-800'
        >
          <img
            src='/assets/Discord-Logo-White.svg'
            alt='CryptoKon Discord'
            className='h-5'
          />
          <p>Discord</p>
        </a>

        <a
          href=''
          className='flex space-x-3 items-center py-5 px-8 text-sm hover:bg-slate-800 mb-2'
        >
          <img
            src='/assets/Twitter-Logo-White.svg'
            alt='CryptoKon Twitter'
            className='h-5'
          />
          <p>Twitter</p>
        </a>
        <div className='flex space-x-5 items-center my-3'>
          <ConnectButton />
          <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-lg text-transparent bg-clip-text'>
            {account ? `${account.substring(0, 6)}...` : ''}
          </p>
        </div>
      </div>
    </nav>
  );
};
