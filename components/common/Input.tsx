import React, { ChangeEvent } from 'react';

import { useMarketContext } from '../../contexts/MarketContext';
import { InputComponent } from '../../styles/common/Input';

const Input = () => {
  const { setAsset } = useMarketContext();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setAsset(e.target.value);

  return (
    <InputComponent placeholder="Cari aset di Pintu" onChange={handleInput} />
  );
};

export default Input;
