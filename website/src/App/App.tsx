import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'Layout';
import { Values, WelcomePage } from 'Pages';
import Clients from 'Pages/Clients';
import Services from 'Pages/Services';
import Career from 'Pages/Career';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/values" element={<Values />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
