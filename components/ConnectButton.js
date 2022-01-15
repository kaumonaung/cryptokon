import React from 'react';
import { injected } from './wallet/connectors';
import { useWeb3React } from '@web3-react/core';

export const ConnectButton = () => {
  const { active, activate, deactivate, setError } = useWeb3React();

  async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        if (!active) {
          await activate(injected);
        } else {
          deactivate(injected);
        }
      } catch (error) {
        if (error instanceof Error) setError(error);
      }
    }
  }

  return (
    <button
      onClick={connectMetaMask}
      className='font-bold py-2 px-4 text-sm md:text-base rounded uppercase tracking-wider ml-8 md:ml-0 bg-gradient-to-tl from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white'
    >
      {active ? 'Deconnect' : 'Connect Now'}
    </button>
  );
};
