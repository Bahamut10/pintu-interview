import Image from "next/image";
import React, { useEffect, useState } from "react";

import useMobileHook from "../../customHooks/useMobileHook";
import { CryptoCoin } from "../../interfaces/crypto";
import { CryptoPrice } from "../../interfaces/price";
import CryptoItemDesktop from "./Desktop";
import CryptoItemMobile from "./Mobile";

interface CryptoProps {
  coin: CryptoCoin;
  price: CryptoPrice;
  duration?: string;
}

const CryptoItem = (props: CryptoProps) => {
  const { coin, price, duration } = props;
  const isMobile = useMobileHook();

  return !isMobile ? (
    <CryptoItemDesktop coin={coin} price={price} />
  ) : (
    <CryptoItemMobile coin={coin} price={price} duration={duration!} />
  );
};

export default CryptoItem;
