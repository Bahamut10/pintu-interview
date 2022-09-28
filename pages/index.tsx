import { ChangeEvent, useState } from "react";
import type { NextPage } from "next";

import { Container, Heading, Title } from "../styles/Home";
import MarketTableDesktop from "../components/MarketTable/Desktop";
import MarketTableMobile from "../components/MarketTable/Mobile";
import useMobileHook from "../customHooks/useMobileHook";
import Input from "../components/common/Input";

const Home: NextPage = () => {
  const isMobile = useMobileHook();

  return (
    <Container>
      <Heading>
        <Title>
          Harga Crypto Hari Ini (Rupiah)
        </Title>
        <Input />
      </Heading>
      {
        !isMobile ? (
          <MarketTableDesktop />
        ) : (
          <MarketTableMobile />
        )
      }
    </Container>
  );
};

export default Home;
