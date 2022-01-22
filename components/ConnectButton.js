import React from 'react';
import { injected } from './wallet/connectors';
import { useWeb3React } from '@web3-react/core';
import toast from 'react-hot-toast';

export const ConnectButton = ({ white }) => {
  const { active, activate, deactivate, setError } = useWeb3React();

  async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        if (!active) {
          await activate(injected);
          localStorage.setItem('account', 'Connected');
        } else {
          deactivate(injected);
          localStorage.removeItem('account');
        }
      } catch (error) {
        if (error instanceof Error) setError(error);
        toast.error(error);
      }
    } else {
      toast.error('Please install MetaMask');
    }
  }

  if (white) {
    return (
      <button
        onClick={connectMetaMask}
        className='font-bold py-3 px-10 text-2xl rounded uppercase tracking-wider my-2 text-rose-500 bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-white'
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <button
      onClick={connectMetaMask}
      className='font-bold py-2 px-4 text-sm md:text-base rounded uppercase tracking-wider ml-8 bg-gradient-to-tl from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white focus:outline-none focus-visible:ring focus-visible:ring-slate-100'
    >
      {active ? 'Disconnect Wallet' : 'Connect Wallet'}
    </button>
  );
};
