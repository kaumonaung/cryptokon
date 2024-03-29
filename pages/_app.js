import '../styles/globals.css';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { Toaster } from 'react-hot-toast';
import MetaMaskProvider from '../components/wallet/MetaMaskProvider';
import Footer from '../components/Footer';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <Component {...pageProps} />;
        <Footer />
        <Toaster />
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
