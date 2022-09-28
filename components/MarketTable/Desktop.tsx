import { useMarketContext } from "../../contexts/MarketContext";
import { Title } from "../../styles/Home";
import { Table, TBody, Th, Thead, Tr } from "../../styles/MarketTable";
import { TopMoverWrapper, Title as TopMoverTitle } from "../../styles/TopMover";
import CryptoItem from "../CryptoItem/Desktop";
import TopMover from "../TopMover";
import useMarketTable from "./useMarketTable";

const MarketTableDesktop = () => {
  const { asset } = useMarketContext();
  const { data, isLoading, isCoinDelisted, getPrice, getTopMover } = useMarketTable(asset!);

  if (isLoading) return <Title>Loading...</Title>;

  return (
    <>
      <TopMoverTitle>🔥 Top Movers (24 Jam)</TopMoverTitle>
      <TopMoverWrapper>
      {
        getTopMover().map((coin) => (
          <TopMover key={coin.currencySymbol} coin={coin} />
        ))
      }
      </TopMoverWrapper>
      <Table>
        <Thead>
          <Tr head>
            <Th>CRYPTO</Th>
            <Th>HARGA</Th>
            <Th>24 JAM</Th>
            <Th>1 MGG</Th>
            <Th>1 BLN</Th>
            <Th>1 THN</Th>
          </Tr>
        </Thead>
        <TBody>
          {data?.map((coin) => !isCoinDelisted(coin) && (
            <CryptoItem
              key={coin.currencyGroup}
              coin={coin}
              price={getPrice(coin)}
            />
          ))}
        </TBody>
      </Table>
    </>
  );
};

export default MarketTableDesktop;
