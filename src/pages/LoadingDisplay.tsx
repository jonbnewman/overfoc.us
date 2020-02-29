import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  padding-top: 3rem;
  text-align: center;
`;

function LoadingDisplay() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

export default LoadingDisplay;
