import { Route, Routes } from 'react-router-dom';

import { NotFound } from './pages/not-found';
import { Home } from './pages/Home';
import { BestoWaifu } from './pages/besto-waifu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/besto-waifu" element={<BestoWaifu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
