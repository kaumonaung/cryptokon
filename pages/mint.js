import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import MintingGif from '../public/assets/Mint.gif';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { useWeb3React } from '@web3-react/core';

const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const { active } = useWeb3React();

  return (
    <div>
      <Navbar />

      <main className='px-10'>
        <div className='max-w-3xl mx-auto bg-gradient-to-tl from-rose-500 to-pink-500 p-10 rounded-2xl my-20'>
          <div className='max-w-xs mx-auto px-10 py-5'>
            <Image
              src={MintingGif}
              alt='CryptoKon Minting Gif'
              quality={100}
              className='text-slate-100 rounded-full'
            />
          </div>
          <p className='text-rose-900 font-bold text-4xl lg:text-5xl text-center py-5 uppercase tracking-wider'>
            0/10000 Minted
          </p>

          <p className='text-slate-100 text-xl font-bold text-center py-2 mt-2'>
            One CryptoKon NFT costs 0.05 ETH
          </p>

          <p className='max-w-sm mx-auto text-slate-100 font-light text-lg text-center py-2'>
            The price does not include gas fees. <br /> Make sure you are on the
            Ethereum Mainnet.
          </p>

          <div className='flex items-center justify-center gap-5 py-10'>
            <button
              onClick={() => setMintAmount(mintAmount - 1)}
              disabled={mintAmount === 1}
            >
              <MinusCircleIcon className='h-10 w-10 text-slate-100' />
            </button>

            <p className='text-slate-100 font-bold text-2xl px-5'>
              {mintAmount}
            </p>

            <button
              onClick={() => setMintAmount(mintAmount + 1)}
              disabled={mintAmount === 10}
            >
              <PlusCircleIcon className='h-10 w-10 text-slate-100 disabled:opacity-50' />
            </button>
          </div>

          <div className='flex justify-center'>
            {active ? (
              <button className='font-bold py-3 px-10 text-2xl rounded uppercase tracking-wider my-2 text-rose-500 bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-white'>
                Mint Now
              </button>
            ) : (
              <p className='bg-gradient-to-tl from-rose-500 to-pink-500 bg-clip-text text-transparent uppercase text-lg font-medium'>
                Connect to Wallet First
              </p>
            )}
          </div>

          <p className='text-slate-100 font-medium text-lg text-center py-5'>
            {(mintAmount * 0.05).toFixed(2)} ETH
          </p>
        </div>
      </main>
    </div>
  );
};

export default Mint;
