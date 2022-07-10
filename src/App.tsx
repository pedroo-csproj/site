import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { NotFound } from './pages/not-found';
import { Home } from './pages/Home';

const Footer = styled.footer`
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 14px;
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer>
        <p>São Paulo, SP, Brasil</p>
      </Footer>
    </>
  );
}

export default App;
