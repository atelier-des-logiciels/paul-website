import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import menuIcon from './images/menu.svg';

export default function Header() {
  return (
    <div className="fixed p-6 text-white bg-primary-900 border-b-primary-600 border-b-2 w-full">
      {/* before:absolute before:content-[''] before:border-b-2 before:-bottom-2 before:border-b-primary-400 before:w-full */}
      <div className="flex -mt-2 absolute">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <div className="text-2xl font-semibold tracking-wide self-center ml-5 hidden lg:block">
          <Link to="/">Paul Musso</Link>
        </div>
      </div>

      <div className="flex place-content-end md:place-content-center">
        <ul className="hidden md:flex space-x-14 self-center">
          <li>
            <Link to="/services">mes services</Link>
          </li>
          <li>
            <Link to="/values">mes valeurs</Link>
          </li>
          <li>
            <Link to="/clients">mes clients</Link>
          </li>
          <li>
            <Link to="/career">mon parcours</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
