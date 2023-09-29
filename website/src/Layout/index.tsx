import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  return (
    <div className="font-sans min-h-screen flex justify-between flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
