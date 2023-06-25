import React, { useState, useContext } from 'react';
import { Button, Radio, Space, Input, message, Modal } from 'antd';
import styled from 'styled-components';
import { WalletContext } from '../../utils/wallet';
import { getLocalData } from '../../utils/local';
import { downLoadJsonDataFn } from '../../utils/tools';

const { TextArea } = Input;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const UpdateBtn = styled(Button)`
  display: flex;
  width: 200px;
  justify-content: center;
  margin-top: 10px;
`;

const TextAreaCon = styled(TextArea)`
  margin: 20px 0;
`;

function Update() {
  const [value, setValue] = useState('newOracleWorker');
  const [curJsonData, setCurJsonData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    console.log('updateGroupNFT option:', update, signArr);
    try {
      await wallet.updateGroupNFT(update, signArr);
    } catch (e) {
      messageApi.open({
        type: 'error',
        content: String(e)
      });
    } finally {
      const json = {
        "body": {
          "inputs": [
            {
              "transaction_id": "0f2f9814c79f786a06622d4a0d70eaa6a9d0feedc543c79a103b94407d26fe19",
              "index": 0
            },
            {
              "transaction_id": "500167a2a4ad862f0866fc1321f323935c45b37d8bb76c301df1e98b1ecdc6a3",
              "index": 0
            },
            {
              "transaction_id": "f4f4a0506190cb3f24f1aee9ab508dce9333a51818e6b45b127403f8ceefcbe1",
              "index": 0
            }
          ],
          "outputs": [
            {
              "address": "addr_test1wz7kryjwpwra99m5nahmzfd5ygd4j2mtdhe5fp5jte9llhgk2a4fj",
              "amount": {
                "coin": "2331710",
                "multiasset": {
                  "76c4659b1b328354e6bded80f25b8ea17521584fc9919ef54a3fe86c": {
                    "47726f7570496e666f546f6b656e436f696e": "1"
                  }
                }
              },
              "plutus_data": {
                "Data": "{\"constructor\":0,\"fields\":[{\"list\":[{\"bytes\":\"bd61924e0b87d297749f6fb125b4221b592b6b6df34486925e4bffdd\"},{\"bytes\":\"56eed02841b7835d050d1801ccc61939ce8281026932576db36ef66a\"},{\"bytes\":\"02bb1a9d739f12068f8886671c30c4aa08dbff9085eaf7255df0f7f4925e921d3e\"},{\"bytes\":\"b4b75848843d485a3e2f1f95783763afb58009e5ff444cde1dfd3e19\"},{\"bytes\":\"083f459eeb1e23972c6fe190543dcbbcbc5d6db9c4892403ea288382\"},{\"bytes\":\"b4b75848843d485a3e2f1f95783763afb58009e5ff444cde1dfd3e19\"},{\"bytes\":\"b007bdeb1853cf42a36eb07737185e608b778ce8a6b94a6ed8f6c7b2\"},{\"bytes\":\"4e83a9652d76167d9289b190def35276bec262fb0cd18caa4a0835d5\"},{\"bytes\":\"9c2abd15db9e9b27fca7f4b367cc08e28483d4ca05fcc63a3f58413c\"}]}]}"
              },
              "script_ref": null
            },
            {
              "address": "addr_test1wr6l68tfw8u73ag6regpz7987a73jcv7d274qwnsp7p2szg782txc",
              "amount": {
                "coin": "1896400",
                "multiasset": {
                  "32b20627e2309c04a2cf462458ee63cb61712c3b7c952da8cc37b6a5": {
                    "41646d696e4e4654436f696e": "1"
                  }
                }
              },
              "plutus_data": {
                "Data": "{\"constructor\":0,\"fields\":[{\"list\":[{\"bytes\":\"b4b75848843d485a3e2f1f95783763afb58009e5ff444cde1dfd3e19\"},{\"bytes\":\"72ebc8498ce173916e5d819725f33dac499a0ce9f5e82f2dcef88876\"},{\"bytes\":\"818ba523bf6979604b719e1a9dcb63c91d5dcf29c6d7475a483e2e13\"},{\"bytes\":\"d573c314651c8ae50fcce794198100d6d34ee6fb51d243b666ef459a\"},{\"bytes\":\"fda8ba360f889fc4cd12996abe92c799e193baf111d8883e60ac3afb\"},{\"bytes\":\"6c05225f0dd067b4fc07943857dbb5b841c3e20318cb7ecaf441598f\"}]},{\"int\":1}]}"
              },
              "script_ref": null
            },
            {
              "address": "addr_test1qzqchffrha5hjcztwx0p48wtv0y36hw098rdw366fqlzuymun97wgelqtwe9aladfx2pukf4jdfqtjh7cnja50y247dsnalv6f",
              "amount": {
                "coin": "4181551",
                "multiasset": null
              },
              "plutus_data": null,
              "script_ref": null
            }
          ],
          "fee": "818449",
          "ttl": null,
          "certs": null,
          "withdrawals": null,
          "update": null,
          "auxiliary_data_hash": null,
          "validity_start_interval": null,
          "mint": null,
          "script_data_hash": "90d4f3622bcdcd8898a6173a80536e1b2edeb2a07f46696d855821845e179bf5",
          "collateral": [
            {
              "transaction_id": "500167a2a4ad862f0866fc1321f323935c45b37d8bb76c301df1e98b1ecdc6a3",
              "index": 0
            }
          ],
          "required_signers": [
            "818ba523bf6979604b719e1a9dcb63c91d5dcf29c6d7475a483e2e13"
          ],
          "network_id": null,
          "collateral_return": {
            "address": "addr_test1qzqchffrha5hjcztwx0p48wtv0y36hw098rdw366fqlzuymun97wgelqtwe9aladfx2pukf4jdfqtjh7cnja50y247dsnalv6f",
            "amount": {
              "coin": "3375334",
              "multiasset": {}
            },
            "plutus_data": null,
            "script_ref": null
          },
          "total_collateral": "1624666",
          "reference_inputs": [
            {
              "transaction_id": "f4f4a0506190cb3f24f1aee9ab508dce9333a51818e6b45b127403f8ceefcbe1",
              "index": 0
            },
            {
              "transaction_id": "0f2f9814c79f786a06622d4a0d70eaa6a9d0feedc543c79a103b94407d26fe19",
              "index": 0
            },
            {
              "transaction_id": "3c124ab49b4188b9744e874b2367e6545f197d05325b774de02c0ba1a76a303a",
              "index": 0
            },
            {
              "transaction_id": "72745b379e00db1be0350779a247b08833b38630e182c676468e9e62fd698b8a",
              "index": 0
            }
          ]
        },
        "witness_set": {
          "vkeys": [
            {
              "vkey": "ed25519_pk1sfecydx58gw4mszjhu78zz28wycaxgjlxr6fmzz484u37nhe8jasgd64f9",
              "signature": "02872778de05c56772bf510f10f2cf00eeeed46f6531ccef64d87a127a4791086906e3135dd10834c0bdb0f771f09b174ea4694479c45f3cc87ac7e5e2ebae03"
            }
          ],
          "native_scripts": null,
          "bootstraps": null,
          "plutus_scripts": null,
          "plutus_data": null,
          "redeemers": [
            {
              "tag": "Spend",
              "index": "0",
              "data": "{\"int\":5}",
              "ex_units": {
                "mem": "5019790",
                "steps": "1417257508"
              }
            },
            {
              "tag": "Spend",
              "index": "2",
              "data": "{\"constructor\":0,\"fields\":[]}",
              "ex_units": {
                "mem": "2710110",
                "steps": "789461911"
              }
            }
          ]
        },
        "is_valid": true,
        "auxiliary_data": null
      }
      setCurJsonData(json);
      showModal();
    }
  };

  const onTextAreaChange = (e) => {
    setTextValue(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    downLoadJsonDataFn(curJsonData, `updateNft:{${String(new Date()).split(' ').join('-')}}`)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <UpdateBtn type="primary" onClick={() => handleUpdate()}>Update</UpdateBtn>
      <Modal title="down load json data" open={isModalOpen} cancelText='no' onOk={handleOk} okText='yes' onCancel={handleCancel}>
        <p>Whether to download the json file？</p>
      </Modal>
    </Body>
  )
};

export default Update;