import { useEffect, useState } from "react";
import { CryptoPrice } from "../../interfaces/price";

const useCryptoItem = (price: CryptoPrice) => {
  const [prevPrice, setPrevPrice] = useState(Number.NEGATIVE_INFINITY);
  const [upDownStatus, setUpDownStatus] = useState('neutral');
  
  const formatCurrency = (value: number): string | undefined => {
    const isEmpty = +value === 0;
    const isNaN = Number.isNaN(+value);
    if (isEmpty || isNaN) {
      return '-';
    }
    const format = Math.round(value).toString().split('').reverse()
      .join('');
    const convert = format?.match(/\d{1,3}/g);
    const result = convert?.join('.').split('').reverse().join('');
    return result;
  }

  const compareCoinPrice = () => {
    let up = prevPrice < parseInt(price?.latestPrice);
    setPrevPrice(parseInt(price?.latestPrice))
    setUpDownStatus(up ? 'up' : 'down')
    setTimeout(() => {
      setUpDownStatus('neutral')
    }, 500)
  }

  useEffect(() => {
    compareCoinPrice();
  }, [price?.latestPrice]);

  return {
    upDownStatus,
    formatCurrency,
  }
}

export default useCryptoItem;
