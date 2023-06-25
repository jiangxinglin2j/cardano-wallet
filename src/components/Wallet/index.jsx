import React, { useContext } from 'react';
import { Button } from 'antd';
import { styled } from 'styled-components';
import { subStrFn } from '@/utils/tools.js'
import { WalletContext } from '../../utils/wallet';

const WalletBtn = styled(Button)`
  margin: 10px 2px;
`;

function Wallet() {
  const wallet = useContext(WalletContext);
  const {
    connected,
    address,
    connect
  } = wallet;

  const connectWallet = async () => {
    connect();
    console.log('address', address);
  }

  return (
    <>
      <WalletBtn type="primary" onClick={connectWallet}>{ connected ? subStrFn(address, 7, 8) : 'connect wallet' }</WalletBtn>
    </>
  )
};

export default Wallet;