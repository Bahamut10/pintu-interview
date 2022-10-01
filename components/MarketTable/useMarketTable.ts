import { useCallback, useEffect, useState } from 'react';

import { useMarketContext } from '../../contexts/MarketContext';
import { delisted } from '../../helpers/delisted';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';

const useMarketTable = (coin: CryptoCoin[], price: CryptoPrice[]) => {
  const { asset, setTopMover } = useMarketContext();
  const [data, setData] = useState<CryptoCoin[]>(coin);

  const getPrice = (coin: CryptoCoin) => {
    return price.filter(
      (data) => data.pair.split('/')[0] === coin.currencySymbol.toLowerCase()
    )[0];
  }

  const getTopMover = (payload: CryptoPrice[]) => {
    const arr = payload.filter((data) => !delisted.includes(data.pair.split('/')[0]));
    arr.sort(
      (a, b) => Math.abs(parseFloat(b?.day ?? '0.00')) - Math.abs(parseFloat(a?.day ?? '0.00'))
    );

    const result = arr.slice(0, 6).map((data) => ({
      ...data,
      ...coin.filter(
        (val) => val.currencySymbol.toLowerCase() === data.pair.split('/')[0]
      )[0],
    }));

    setTopMover(result as Array<CryptoCoin & CryptoPrice>)
  };

  const isCoinDelisted = useCallback((coin: CryptoCoin) =>
    delisted.includes(coin.currencySymbol.toLowerCase()), [coin]);

  const handleTyping = useCallback(() => {
    if (asset !== '') {
      setData(
        coin.filter(
          (val) =>
            val.name.toLowerCase().includes(asset) ||
            val.currencySymbol.toLowerCase().includes(asset)
        )
      );
    } else {
      setData(coin);
    }
  }, [asset]);

  useEffect(() => {
    handleTyping();
  }, [asset]);

  useEffect(() => {
    setData(coin);
  }, [coin]);

  return {
    data,
    getPrice,
    getTopMover,
    isCoinDelisted,
  };
};

export default useMarketTable;
