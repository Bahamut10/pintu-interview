import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useMarketContext } from '../../contexts/MarketContext';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';
import Crypto from '../../network/Crypto';
import useTopMover from '../TopMover/useTopMover';

import MarketTableDesktop from './Desktop';
import MarketTableMobile from './Mobile';

interface Props {
  coin: CryptoCoin[]
  price: CryptoPrice[]
}

const MarketTable = (props: Props) => {
  const { coin, price } = props;
  const { getTopMover } = useTopMover();
  const { setTopMover } = useMarketContext();

  const [priceData, setPriceData] = useState<CryptoPrice[]>(price);

  useQuery('price-change', () => Crypto.getCryptoPriceChanges(),
    {
      refetchInterval: 1000,
      onSuccess: ({ payload }) => {
        setTopMover(getTopMover(coin, payload));
        setPriceData(payload)
      }
    }
  );

  return (
    <>
      <MarketTableDesktop coin={coin} price={priceData} />
      <MarketTableMobile coin={coin} price={priceData} />
    </>
  )
}

export default MarketTable;
