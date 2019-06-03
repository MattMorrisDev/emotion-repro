import {css} from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import 'src/App.css';

const createStyledDiv = styled.div;
const extendStyled = styled;

const StyledDiv = styled.div({
  color: 'green',
});

const StyledDivViaAlias = createStyledDiv({
  color: 'blue',
});

const ExtendedStyledDiv = extendStyled(StyledDiv)({
  color: 'red',
});


const App: React.SFC = () => {
  return (

    <div className="App">

      {/* Sourcemaps work here*/}
      <StyledDiv>StyledDiv</StyledDiv>

      {/* Sourcemaps DO NOT work here*/}
      <StyledDivViaAlias>StyledDivViaAlias</StyledDivViaAlias>

      {/* Sourcemaps work here*/}
      <ExtendedStyledDiv>ExtendedStyledDivViaAlias</ExtendedStyledDiv>

      {/* Sourcemaps work here*/}
      <div css={css({color: 'purple'})}>inline css prop</div>
    </div>
  );
};

export default App;
