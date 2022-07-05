import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
`
const SectionContainer = styled.div`
  display:flex;
`;
const SectionContainer__grid = styled.div`
  display:grid;
  width:1200px;
`;
const Section_Container__img = styled.div`
`
const Section_Container__number = styled.div`
`
const Section_Container__award = styled.div`
`

function App() {
  return (
    <Container className="App">
      <SectionContainer>
        <SectionContainer__grid>
          <Section_Container__img></Section_Container__img>
          <Section_Container__number></Section_Container__number>
          <Section_Container__award></Section_Container__award>
        </SectionContainer__grid>
      </SectionContainer>
    </Container>
  );
}

export default App;
