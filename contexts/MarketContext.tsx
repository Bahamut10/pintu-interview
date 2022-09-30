import React, { useState, createContext, useContext, ReactNode } from 'react';
import { CryptoCoin } from '../interfaces/crypto';
import { CryptoPrice } from '../interfaces/price';

interface Props {
  children?: ReactNode
}
interface ContextType {
  asset: string
  setAsset: (value: string) => void
  topMover: Array<CryptoCoin & CryptoPrice>
  setTopMover: (value: Array<CryptoCoin & CryptoPrice>) => void
}

const initialState = {
  asset: '',
  setAsset: () => {},
  topMover: [],
  setTopMover: () => {},
};

const MarketContext = createContext<ContextType>(initialState);

const MarketContextProvider = (props: Props) => {
  const { children } = props;
  const [asset, setAsset] = useState('');
  const [topMover, setTopMover] = useState<Array<CryptoCoin & CryptoPrice>>([]);

  return (
    <MarketContext.Provider
      value={{
        asset,
        setAsset,
        topMover,
        setTopMover
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

const useMarketContext = () => useContext(MarketContext);

export { MarketContextProvider, useMarketContext };
