import Clients from './Clients';
import MyValuesSummary from './MyValuesSummary';
import WelcomeSection from './WelcomeSection';

function WelcomePage() {
  return (
    <>
      <WelcomeSection />
      <Clients />
      <MyValuesSummary />
    </>
  );
}

export default WelcomePage;
