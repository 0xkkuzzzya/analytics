import React from 'react';
import styled from 'styled-components';
import { MainHeader } from './components/Header/MainHeader/MainHeader';
import { MainContainer } from './components/MainContainer/MainContainer';


const AppBlock = styled.div`
  
`


function App() {
  
  return (
    <AppBlock>
      <MainHeader/>
      <MainContainer/>
    </AppBlock>
  );
}

export default App;
