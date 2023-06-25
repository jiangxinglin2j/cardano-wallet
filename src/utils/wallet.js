import React from "react";
import { CardanoExtension } from 'wanchain-cross-sdk';

export const network = 'testnet';

const INITIAL_STATE = {
  address: '',
  provider: null,
  connected: false,
  // networkId: network === 'testnet' ? 999 : 888, // TODO: CHANGE TO 888 AFTER JUPITER FORK
};

const differ = (a, b) => {
  if (a.address !== b.address) {
    return 1;
  }

  // if (a.networkId !== b.networkId) {
  //   return 1;
  // }

  if (a.connected !== b.connected) {
    return 1;
  }

  return 0;
};

export const WalletContext = React.createContext({}, differ);

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const intiState = {
      ...INITIAL_STATE,
      resetApp: this.resetApp,
      connect: this.onConnect,
      initSigner: this.initSigner,
      updateGroupNFT: this.updateGroupNFT,
      upgradeGroupNFT: this.upgradeGroupNFT,
    };

    this.setWallet = props.setWallet;
    this.setWallet(intiState);
    this.sdkWallet = null;
    this.cardanoSigner = null;
  }

  async componentDidMount() {
    // has cache
    if (true) {
      // lear cache & return
      
    }
    await CardanoExtension.init();
    this.sdkWallet = this.getCardanoWallet();
    await this.onConnect();
  }

  getCardanoWallet = () => {
    if (window.cardano.nami) {
      return new CardanoExtension.NamiWallet(network);
    } else {
      return new CardanoExtension.YoroiWallet(network);
    }
  }

  initSigner = async () => {
    let cardanoSigner = new CardanoExtension.Signer("testnet", this.sdkWallet); 
    await cardanoSigner.init("ogmios.wanchain.org", 1337); 
    this.cardanoSigner = cardanoSigner;
  }

  updateGroupNFT = async (update, signData) => {
    try {
      if (!this.cardanoSigner) await this.initSigner();
      const bob = await this.cardanoSigner.updateGroupNFT( update, signData ); 
      console.log('bob', bob)
      return bob;
    } catch (e) {
      console.error('updateGroupNFT', e)
      throw new Error(e.info)
    }
  }

  upgradeGroupNFT = async (update, signData) => {
    try {
      if (!this.cardanoSigner) await this.initSigner();
      await this.cardanoSigner.upgradeGroupNFT( update, signData ); 
    } catch (e) {
      console.error('upgradeGroupNFT', e)
      throw new Error(e)
    }
  }

  onConnect = async () => {
    try {
      let provider = this.sdkWallet;

      const accounts = await provider.getAccounts(network);
      this.accounts = accounts;

      const address = accounts[0];

      // const networkId = await web3.eth.net.getId();

      await this.setWallet({
        provider,
        connected: true,
        accounts,
        address,
        // networkId,
        connect: this.onConnect,
        initSigner: this.initSigner,
        updateGroupNFT: this.updateGroupNFT,
        upgradeGroupNFT: this.upgradeGroupNFT,
      });
    } catch (error) {
      console.error('err', error);
    }
  };

  render() {
    return <></>;
  }

}

export default Wallet;