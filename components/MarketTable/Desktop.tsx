import { Title } from "../../styles/Home";
import { Table, TBody, Th, Thead, Tr } from "../../styles/MarketTable";
import { TopMoverWrapper, Title as TopMoverTitle } from "../../styles/TopMover";
import CryptoItem from "../CryptoItem";
import TopMover from "../TopMover";
import useMarketTable from "./useMarketTable";

interface MarketTableProps {
  asset?: string;
}

const MarketTableDesktop = (props: MarketTableProps) => {
  const { asset } = props;
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
            <Th className="hidden lg:table-cell">HARGA</Th>
            <Th className="hidden lg:table-cell">24 JAM</Th>
            <Th className="hidden lg:table-cell">1 MGG</Th>
            <Th className="hidden lg:table-cell">1 BLN</Th>
            <Th className="hidden lg:table-cell">1 THN</Th>
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
