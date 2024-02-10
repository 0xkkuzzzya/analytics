import styled from "styled-components";
import AnalyticsLogo from '../../../assets/svg/AnalyticsLogo.svg'
import { ConnectButton } from "../../Buttons/ConnectButton/ConnectButton";

const Header = styled.div`
    width: 100%;
    height: 90px;
    background: #171528;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 60px;
    margin-left: 50px;
    margin-right: auto;
`



export const MainHeader = () => {
    return(
        <Header>
            <Logo src={AnalyticsLogo}></Logo>
            <ConnectButton/>
        </Header>
    )
}