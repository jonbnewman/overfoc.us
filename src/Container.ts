import styled from 'styled-components/macro';
import grey from '@material-ui/core/colors/grey';

import { headerHeight } from './theme';

export default styled.div`
  display: grid;
  grid-template-rows: ${headerHeight} 1fr 120px;
  grid-template-areas:
    'header'
    'body'
    'footer';
  grid-row-gap: 1rem;
  min-height: 100vh;
  background: ${grey[50]};
  font-family: 'Lato', sans-serif;

  * {
    box-sizing: border-box;
  }
`;
