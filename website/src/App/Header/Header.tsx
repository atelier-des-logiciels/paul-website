import logo from './images/logo.png';
import menuIcon from './images/menu.svg';

export default function Header() {
  return (
    <div className="sticky p-6 text-white bg-primary-900 border-b-primary-600 border-b-2 ">
      {/* before:absolute before:content-[''] before:border-b-2 before:-bottom-2 before:border-b-primary-400 before:w-full */}
      <div className="flex -mt-2 absolute">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <div className="text-2xl font-semibold tracking-wide self-center ml-5 hidden lg:block">
          Paul Musso
        </div>
      </div>

      <div className="flex place-content-end md:place-content-center">
        <ul className="hidden md:flex space-x-14 self-center">
          <li>mes services</li>
          <li>mes valeurs</li>
          <li>mes clients</li>
          <li>mon parcours</li>
        </ul>
        <div className="md:hidden">
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
