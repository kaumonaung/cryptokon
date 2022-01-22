import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import MintingLoadingState from '../components/MintingLoadingState';
import { ConnectButton } from '../components/ConnectButton';
import Image from 'next/image';
import MintingGif from '../public/assets/Mint.gif';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { useWeb3React } from '@web3-react/core';
import TestABI from '../contracts/TestABI.json';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';

const Mint = () => {
  const { active, chainId, account } = useWeb3React();
  const [claimingNFT, setClaimingNFT] = useState(false);
  const [totalSupply, setTotalSupply] = useState('');
  const [mintAmount, setMintAmount] = useState(1);

  const mintNFTs = async () => {
    if (active && account) {
      const cost = process.env.NEXT_PUBLIC_WEI_COST;
      const gasLimit = process.env.NEXT_PUBLIC_GAS_LIMIT;
      const totalCostWei = (Number(cost) * mintAmount).toString();
      const totalGasLimit = (Number(gasLimit) * mintAmount).toString();

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
          TestABI,
          signer
        );

        const transaction = await contract.mint(mintAmount, {
          value: totalCostWei,
          gasLimit: totalGasLimit.toString(),
        });

        setClaimingNFT(true);
        await transaction.wait();
        setClaimingNFT(false);

        toast.success(
          `Awesome! ${mintAmount} ${
            process.env.NEXT_PUBLIC_NFT_SYMBOL
          } successfully sent to ${account.substring(
            0,
            6
          )}...${account.substring(account.length - 4)}`,
          {
            duration: 10000,
          }
        );
      } catch (err) {
        toast.error('Sorry, something went wrong please try again later.');
      }
    }
  };

  useEffect(() => {
    const fetchTotalSupply = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        TestABI,
        provider
      );

      const totalSupply = await contract.totalSupply();
      setTotalSupply(totalSupply.toString());
    };

    if (
      active &&
      chainId &&
      chainId.toString() === process.env.NEXT_PUBLIC_CHAIN_ID
    ) {
      fetchTotalSupply();
    } else {
      setTotalSupply('?');
    }
  }, [active, chainId]);

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
            {totalSupply}/10000
          </p>

          <p className='text-slate-100 text-xl font-bold text-center py-2 mt-2'>
            One CryptoKon NFT costs {process.env.NEXT_PUBLIC_ETH_COST} ETH
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
            {(() => {
              if (active && !claimingNFT) {
                return (
                  <button
                    onClick={() => mintNFTs()}
                    className='font-bold py-3 px-10 text-2xl rounded uppercase tracking-wider my-2 text-rose-500 bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-white'
                  >
                    Mint Now
                  </button>
                );
              } else {
                if (active && claimingNFT) {
                  return <MintingLoadingState />;
                } else {
                  return <ConnectButton white={true} />;
                }
              }
            })()}
          </div>

          <p className='text-slate-100 font-medium text-lg text-center py-5'>
            {(mintAmount * process.env.NEXT_PUBLIC_ETH_COST).toFixed(2)} ETH
          </p>
        </div>
      </main>
    </div>
  );
};

export default Mint;
