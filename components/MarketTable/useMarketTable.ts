import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMarketContext } from '../../contexts/MarketContext';
import { delisted } from '../../helpers/delisted';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';
import Crypto from '../../network/Crypto';

const useMarketTable = () => {
  const { asset, setTopMover } = useMarketContext();
  const [data, setData] = useState<CryptoCoin[]>();

  const { data: coinData, isLoading } = useQuery('coin-list', () =>
    Crypto.getCryptoList()
  );

  const { data: priceData } = useQuery(
    'price-change',
    () => Crypto.getCryptoPriceChanges(),
    {
      refetchInterval: 1000,
      onSuccess: ({ payload }) => getTopMover(payload)
    }
  );

  const getPrice = (coin: CryptoCoin) =>
    priceData?.payload?.filter(
      (data) => data.pair.split('/')[0] === coin.currencySymbol.toLowerCase()
    )[0];

  const getTopMover = (payload: CryptoPrice[]) => {
    let arr = payload;
    arr = arr?.filter((data) => !delisted.includes(data.pair.split('/')[0]));
    arr?.sort(
      (a, b) => Math.abs(parseFloat(b?.day ?? '0.00')) - Math.abs(parseFloat(a?.day ?? '0.00'))
    );

    const result = arr?.slice(0, 6).map((data) => ({
      ...data,
      ...coinData?.payload.filter(
        (val) => val.currencySymbol.toLowerCase() === data.pair.split('/')[0]
      )[0],
    }));

    setTopMover(result as Array<CryptoCoin & CryptoPrice>)
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
