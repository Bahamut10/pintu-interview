import { useMarketContext } from '../../contexts/MarketContext';
import { delisted } from '../../helpers/delisted';
import { CryptoCoin } from '../../interfaces/crypto';

const useTopMover = () => {
  const getTopMover = (coin: CryptoCoin[], payload: CryptoPrice[]) => {
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

    return result
  };

  return {
    getTopMover,
  }
}

export default useTopMover;
