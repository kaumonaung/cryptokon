import React, { useState, useEffect } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { ConnectButton } from './ConnectButton';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Discord from '../public/assets/Discord-Logo-White.svg';
import Twitter from '../public/assets/Twitter-Logo-White.svg';

export const Navbar = () => {
  const [onMinting, setOnMinting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { account } = useWeb3React();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == '/mint') {
      setOnMinting(true);
    }
  }, [router.pathname]);

  return (
    <nav className='sticky top-0 z-50 bg-slate-900'>
      <div className='max-w-6xl mx-auto px-5 py-9'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href='/'>
              <a>
                <Image
                  src='/assets/Logo_Light.png'
                  alt='CryptoKon Logo'
                  className='cursor-pointer'
                  width={200}
                  height={27}
                  quality={100}
                />
              </a>
            </Link>
          </div>

          {!onMinting && (
            <Link href='/mint'>
              <a className='hidden md:block text-white font-bold text-xl uppercase tracking-wider hover:text-rose-500 focus:outline-none focus-visible:ring focus-visible:ring-rose-500'>
                Mint Now
              </a>
            </Link>
          )}

          <div className='items-center space-x-2 text-white hidden md:flex'>
            <div className='px-2'>
              <Link href='#'>
                <a>
                  <Image
                    src={Discord}
                    width={30}
                    height={30}
                    className='cursor-pointer'
                    alt='Discord Logo'
                  />
                </a>
              </Link>
            </div>

            <div className='px-2'>
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

            <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-lg text-transparent bg-clip-text'>
              {account ? `${account.substring(0, 6)}...` : ''}
            </p>
            <ConnectButton />
          </div>

          {/* Mobile Button */}
          <div className='md:hidden items-center'>
            <button
              onClick={() => setIsMobile(!isMobile)}
              className='focus:outline-none focus-visible:ring focus-visible:ring-rose-500'
            >
              <MenuIcon className='w-6 h-6 text-white' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Goes Here */}
      <div
        className={`${isMobile ? 'block' : 'hidden'} text-white md:hidden pb-5`}
      >
        {!onMinting && (
          <Link href='/mint'>
            <a className='block md:hidden text-white font-bold text-lg uppercase tracking-wide hover:text-rose-500 hover:bg-slate-800 py-4 px-8 focus:outline-none focus-visible:ring focus-visible:ring-rose-500'>
              Mint Now
            </a>
          </Link>
        )}
        <Link href='#'>
          <a className='flex space-x-3 items-center py-5 px-8 text-sm hover:bg-slate-800 mb-2'>
            <Image
              src={Discord}
              width={30}
              height={30}
              className='cursor-pointer'
              alt='Discord Logo'
            />
            <p className='text-slate-100 font-medium uppercase tracking-wide text-xs'>
              Dicsord
            </p>
          </a>
        </Link>

        <Link href='#'>
          <a className='flex space-x-3 items-center py-5 px-8 text-sm hover:bg-slate-800 mb-2'>
            <Image
              src={Twitter}
              width={30}
              height={30}
              className='cursor-pointer'
              alt='Twitter Logo'
            />
            <p className='text-slate-100 font-medium uppercase tracking-wide text-xs'>
              Twitter
            </p>
          </a>
        </Link>

        <div className='flex space-x-5 items-center my-3 '>
          <ConnectButton />
          <p className='bg-gradient-to-tl from-rose-500 to-pink-500 font-bold text-lg text-transparent bg-clip-text'>
            {account ? `${account.substring(0, 6)}...` : ''}
          </p>
        </div>
      </div>
    </nav>
  );
};
