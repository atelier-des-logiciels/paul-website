import Clients from './Clients';
import Footer from './Footer';
import Header from './Header';
import MyValuesSummary from './MyValuesSummary';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <div className="font-sans min-h-screen flex justify-between flex-col">
      <Header />
      <WelcomePage />
      <Clients />
      <MyValuesSummary />
      <Footer />
    </div>
  );
}

export default App;
