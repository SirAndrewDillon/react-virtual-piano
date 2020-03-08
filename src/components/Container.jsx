import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop || '10%' };
  margin-bottom: ${props => props.marginBottom || '10%' };
  padding: 0 5%;
`
const Container = props => {
  return (
    <StyledContainer 
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      {props.children}
    </StyledContainer>
  )
}

export default Container;