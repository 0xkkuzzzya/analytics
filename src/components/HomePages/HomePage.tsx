import styled from "styled-components";

const Container = styled.div`
    width: 450px;
    height: 500px;
    margin: auto;
    border: 3px solid #262241;
    border-radius: 20px;
    background: transparent;
`

const ContainerHeader = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
`

const HeaderText = styled.a`
    font-weight: 600;
    font-size: 30px;
    color: #fff;
`

const BalanceBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-left: 20px;
`

const BalanceText = styled.a`
    font-weight: 600;
    font-size: 45px;
    color: #fff;
`


export const HomePage = () => {
    return(
        <Container>
            <ContainerHeader>
                <HeaderText>Balance</HeaderText>
            </ContainerHeader>
            <BalanceBlock>
                <BalanceText>0.00 $</BalanceText>
            </BalanceBlock>
        </Container>
    )
}