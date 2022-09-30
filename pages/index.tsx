import React from 'react';
import type { NextPage } from 'next';

import { Container, Heading, Title } from '../styles/Home';
import MarketTableDesktop from '../components/MarketTable/Desktop';
import MarketTableMobile from '../components/MarketTable/Mobile';
import useMobileHook from '../customHooks/useMobileHook';
import Input from '../components/common/Input';
import TopMover from '../components/TopMover';

const Home: NextPage = () => {
  const isMobile = useMobileHook();

  return (
    <Container>
      <Heading>
        <Title>Harga Crypto Hari Ini (Rupiah)</Title>
        <Input />
      </Heading>
      <TopMover />
      {!isMobile ? <MarketTableDesktop /> : <MarketTableMobile />}
    </Container>
  );
};

export default Home;
