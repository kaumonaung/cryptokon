import React, { useState, useEffect } from 'react';
import { injected } from './connectors';
import { useWeb3React } from '@web3-react/core';

const MetaMaskProvider = ({ children }) => {
  const { active, error, activate } = useWeb3React();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var acc = localStorage.getItem('account');
    }

    injected
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !active && !error && acc !== null) {
          activate(injected);
          acc = localStorage.setItem('account', 'Connected');
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, []);

  if (loaded) {
    return children;
  }

  return <>Loading</>;
};

export default MetaMaskProvider;
