import Image from "next/image";

import { CryptoCoin } from "../../interfaces/crypto";
import { CryptoPrice } from "../../interfaces/price";
import {
  CoinCurrency,
  CoinIdentity,
  CoinName,
  CoinPrice,
  CoinPriceWrapper,
  CoinSymbol,
  CoinNameWrapper,
} from "../../styles/CryptoItem";
import { ListItem } from "../../styles/MarketTable";
import useCryptoItem from "./useCryptoItem";

interface CryptoProps {
  coin: CryptoCoin;
  price: CryptoPrice;
  duration: string;
}

const CryptoItem = (props: CryptoProps) => {
  const { coin, price, duration } = props;
  const { upDownStatus, formatCurrency } = useCryptoItem(price);

  return (
    <ListItem>
      <CoinIdentity>
        <Image src={coin.logo} alt="Crypto Logo" width="40" height="40" />
        <CoinNameWrapper>
          <CoinName>{coin.name}</CoinName>
          <CoinSymbol>{coin.currencySymbol}</CoinSymbol>
        </CoinNameWrapper>
      </CoinIdentity>
      <CoinPriceWrapper>
        <CoinCurrency upDownStatus={upDownStatus}>
          Rp {formatCurrency(parseInt(price?.latestPrice))}
        </CoinCurrency>
        <CoinPrice price={parseFloat(price?.[duration as keyof typeof price]!)}>
          {price?.[duration as keyof typeof price] || "0.00"}%
        </CoinPrice>
      </CoinPriceWrapper>
    </ListItem>
  );
};

export default CryptoItem;
