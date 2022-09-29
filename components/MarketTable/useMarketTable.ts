import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMarketContext } from '../../contexts/MarketContext';
import { delisted } from '../../helpers/delisted';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';
import Crypto from '../../network/Crypto';

const useMarketTable = () => {
  const { asset } = useMarketContext();
  const [data, setData] = useState<CryptoCoin[]>();

  const { data: coinData, isLoading } = useQuery('coin-list', () => Crypto.getCryptoList());

  const { data: priceData } = useQuery(
    'price-change',
    () => Crypto.getCryptoPriceChanges(),
    {
      refetchInterval: 1000,
    }
  );

  const getPrice = (coin: CryptoCoin): CryptoPrice =>
    priceData?.payload?.filter(
      (data) => data.pair.split('/')[0] === coin.currencySymbol.toLowerCase()
    )[0];

  const getTopMover = (): Array<CryptoCoin & CryptoPrice> => {
    let arr = priceData?.payload;
    arr = arr?.filter((data) => !delisted.includes(data.pair.split('/')[0]));
    arr?.sort(
      (a, b) => Math.abs(parseFloat(b?.day)) - Math.abs(parseFloat(a?.day))
    );

    const result = arr?.slice(0, 6).map((data) => ({
      ...data,
      ...coinData?.payload.filter(
        (val) => val.currencySymbol.toLowerCase() === data.pair.split('/')[0]
      )[0],
    }));

    return result!;
  };

  const isCoinDelisted = (coin: CryptoCoin) =>
    delisted.includes(coin.currencySymbol.toLowerCase());

  const handleTyping = () => {
    if (asset !== '') {
      setData(
        coinData?.payload?.filter(
          (val) =>
            val.name.toLowerCase().includes(asset) ||
            val.currencySymbol.toLowerCase().includes(asset)
        )
      );
    } else {
      setData(coinData?.payload);
    }
  };

  useEffect(() => {
    handleTyping();
  }, [asset]);

  useEffect(() => {
    setData(coinData?.payload);
  }, [coinData]);

  return {
    data,
    isLoading,
    isCoinDelisted,
    getPrice,
    getTopMover,
  };
};

export default useMarketTable;
