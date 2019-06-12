import {CSSObject} from '@emotion/serialize';
import styled from '@emotion/styled';
import React from 'react';
import 'src/App.css';



const additionalStyles: CSSObject = {};


const StyledDiv = styled.div({
  color: 'green',
  
  // Uncomment the following line to trigger the perf issues
  // ...additionalStyles
  
});


const App: React.SFC = () => {
  return (

    <div className="App">
      <StyledDiv>StyledDiv - green text</StyledDiv>
    </div>
  );
};

export default App;
