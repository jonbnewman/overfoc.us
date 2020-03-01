import styled from "styled-components";

export default styled.div`
  p:last-child {
    margin: 0;
  }

  h1:first-child {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
