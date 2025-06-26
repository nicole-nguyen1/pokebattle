import styled from '@emotion/styled';

import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import { TeamSelection } from './components/team-selection';
import { Button, Stack } from '@mui/material';

const StyledApp = styled.div`
  // Your style here
  width: 100%;
  height: 100vh;
`;

export function App() {
  return (
    <StyledApp>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/select-team"
          element={
            <Stack spacing={4}>
              <Link to="/">
                <Button>Back</Button>
              </Link>
              <TeamSelection />
            </Stack>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
