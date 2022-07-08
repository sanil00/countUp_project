import React from 'react';
import './css/App.css';
import styled from 'styled-components';
import AwardContainer from './component/Award'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`


const App = () => {
  return (
    <Container className="App">
      <AwardContainer />
    </Container>
  );
}

export default App;
