import styled from "styled-components";
import { HomePage } from "../HomePages/HomePage";

const Container = styled.div`
    width: 100%;
    height: 91vh;
    background: #13121E;
    display: flex;
`

export const MainContainer = () => {
    return(
        <Container>
            <HomePage/>
        </Container>
    )
}