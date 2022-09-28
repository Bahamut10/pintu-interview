import { useState } from "react";
import useMobileHook from "../../customHooks/useMobileHook";
import MarketTableDesktop from "./Desktop";
import MarketTableMobile from "./Mobile";

interface MarketTableProps {
  asset?: string;
}

const MarketTable = (props: MarketTableProps) => {
  const { asset } = props;
  const isMobile = useMobileHook();

  return !isMobile ? (
    <MarketTableDesktop asset={asset} />
  ) : (
    <MarketTableMobile asset={asset} />
  );
};

export default MarketTable;
