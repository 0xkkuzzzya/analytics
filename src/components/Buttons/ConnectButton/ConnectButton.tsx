import styled from 'styled-components'
import { ConnectKeplr } from '../../../connection/keplr'
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore'
import { useWallet } from '../../../hooks/useWallet'
import { InitSigner } from '../../../connection/stargate'
import { useClient } from '../../../hooks/useClient'
import { useBalancesStore } from '../../../hooks/useBalanceStore'
import { UpdateBalances } from '../../../connection/balances'
import { useAlertStore } from '../../../hooks/useAlertStore'
import { useShowAlert } from '../../../hooks/useShowModal'

const ConnectButtonBlock = styled.button`
    width: 160px;
    height: 35px;
    background: linear-gradient(to right, #00E0FF, #D300F5);
    margin-left: auto;
    margin-right: 50px;
    border: none;
    border-radius: 20px;
    white-space: nowrap;
    font-weight: 600;
    font-size: 15px;
    outline: none;
    cursor: pointer;
`


export const ConnectButton = () => {

        const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
        const [ c, setClient ] = useClient();
        const [ w, setWallet ] = useWallet();
        const [ balances, setBalances ] = useBalancesStore();
        
        
        let ConnectKeplrHandler = async () => {
            let [connected, walletKeplr, alert] = await ConnectKeplr();
            console.log(walletKeplr)
            
            if (connected == true) {
                let wallet = {init: true, wallet: walletKeplr, type: "keplr"};
                setConnectWallet({connected})
                setWallet(wallet)
                
                let client = await InitSigner();
                setClient(client)
                
                let blns = await UpdateBalances(wallet, balances);
                setBalances(blns)
            }
        }

        const disconnect = () => {
            setWallet({
                init: false,
                wallet: null,
                type: ""
            });
            setConnectWallet({
                connected: false
            })
        }

    return(
        <ConnectButtonBlock onClick={w.init == false ? ConnectKeplrHandler : disconnect}>
            {w.init == true ? "Connected" : "Connect Wallet"}
        </ConnectButtonBlock>
    )
}