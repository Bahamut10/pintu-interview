import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { delisted } from "../../helpers/delisted";
import { CryptoCoin } from "../../interfaces/crypto";
import { CryptoPrice } from "../../interfaces/price";
import Crypto from "../../network/Crypto";

const useMarketTable = (asset: string) => {
  const [data, setData] = useState<CryptoCoin[]>();

  const { data: coinData, isLoading } = useQuery('coin-list', () => Crypto.getCryptoList());

  const { data: priceData } = useQuery('price-change', () => Crypto.getCryptoPriceChanges(), {
    refetchInterval: 1000,
  });

  const getPrice = (coin: CryptoCoin): CryptoPrice => (
    priceData?.payload?.filter((data) => data.pair.split('/')[0] === coin.currencySymbol.toLowerCase())[0]
  )

  const getTopMover = () => {
    let arr = priceData?.payload;
    arr = arr?.filter((data) => !delisted.includes(data.pair.split('/')[0]));
    arr?.sort((a, b) => Math.abs(parseFloat(b?.day)) - Math.abs(parseFloat(a?.day)))

    const intersectionPriceData = arr?.slice(0, 5).filter((data) => (
      coinData?.payload?.some((val) => (
        val.currencySymbol.toLowerCase() === data.pair.split('/')[0]
      )
    )))

    const result = intersectionPriceData?.map((data) => ({
      priceData: data,
      coinData: coinData?.payload.filter((val) => val.currencySymbol.toLowerCase() === data.pair.split('/')[0]),
    }))

    return result;
  }

  const isCoinDelisted = (coin: CryptoCoin) => delisted.includes(coin.currencySymbol.toLowerCase());

  const handleTyping = () => {
    if (asset !== '') {
      setData(coinData?.payload?.filter((val) => val.name.toLowerCase().includes(asset!)))
    } else {
      setData(coinData?.payload);
    }
  }

  useEffect(() => {
    handleTyping();
  }, [asset]);

  useEffect(() => {
    setData(coinData?.payload);
  }, [coinData, priceData])

  return {
    data,
    isLoading,
    isCoinDelisted,
    getPrice,
    getTopMover,
  }
}

export default useMarketTable;
