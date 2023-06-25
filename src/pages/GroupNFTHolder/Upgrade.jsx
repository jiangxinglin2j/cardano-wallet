import React, { useState, useContext } from 'react';
import { Button, Radio, Space, Input, message } from 'antd';
import styled from 'styled-components';
import { WalletContext } from '../../utils/wallet';
import { getLocalData } from '../../utils/local';

const { TextArea } = Input;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const UpgradeBtn = styled(Button)`
  display: flex;
  width: 200px;
  justify-content: center;
  margin-top: 10px;
`;

const TextAreaCon = styled(TextArea)`
  margin: 20px 0;
`;

function Upgrade() {
  const [value, setValue] = useState('newOracleWorker');
  const [textValue, setTextValue] = useState('addr_test1qz6twkzgss75sk379u0e27phvwhmtqqfuhl5gnx7rh7nux2xg4uwrhx9t58far8hp3a06hfdfzlsxgfrzqv5ryc78e4s4dwh26');
  const wallet = useContext(WalletContext);
  const [messageApi, contextHolder] = message.useMessage();


  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    setTextValue('');
  };

  const handleUpdate = async () => {
    if (!textValue) throw new Error('inp text');
    let signArr = getLocalData('sign');
    if (!signArr) throw new Error('inp sign array');
    signArr = Object.values(signArr).map(v => v.value);
    const update = {
      [value]: textValue
    };
    console.log('upgradeGroupNFT option:', update, signArr);
    try {
      await wallet.upgradeGroupNFT(update, signArr);
    } catch (e) {
      messageApi.open({
        type: 'error',
        content: String(e)
      });
    }
  }

  const onTextAreaChange = (e) => {
    setTextValue(e.target.value);
  }

  return (
    <Body>
      {contextHolder}
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={'newOracleWorker'}>newOracleWorker</Radio>
          <Radio value={'newTreasuryCheckVH'}>newTreasuryCheckVH</Radio>
          <Radio value={'newMintCheckVH'}>newMintCheckVH</Radio>
          <Radio value={'newStackCheckVH'}>newStackCheckVH</Radio>
        </Space>
      </Radio.Group>
      <TextAreaCon placeholder='inp content' allowClear onChange={onTextAreaChange} value={textValue}></TextAreaCon>
      <UpgradeBtn type="primary" onClick={() => handleUpdate()}>Update</UpgradeBtn>
    </Body>
  )
};

export default Upgrade;