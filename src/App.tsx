import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GameBoard from './components/GameBoard';
import { theme } from './theme/theme';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} >
      <AppWrapper>
        <GameBoard />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
