import { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import { Container, Heading, Input, Title } from "../styles/Home";
import MarketTable from "../components/MarketTable";

const Home: NextPage = () => {
  const [asset, setAsset] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setAsset(e.target.value);

  return (
    <Container>
      <Heading>
        <Title>
          Harga Crypto Hari Ini (Rupiah)
        </Title>
        <Input placeholder="Cari aset di Pintu" onChange={handleInput} />
      </Heading>
      <MarketTable asset={asset} />
    </Container>
  );
};

export default Home;
