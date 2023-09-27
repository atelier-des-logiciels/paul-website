import Clients from './Clients';
import Footer from './Footer';
import Header from './Header';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <div className="font-sans min-h-screen flex justify-between flex-col">
      <Header />
      <WelcomePage />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
