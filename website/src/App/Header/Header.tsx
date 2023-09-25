import logo from './logo.png';

export default function Header() {
  return (
    <div className="sticky p-6 text-white bg-primary-900">
      <div className="flex place-content-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <div className="text-2xl font-semibold tracking-wide self-center ml-1">
            Paul Musso
          </div>
        </div>
        <ul className="flex space-x-14 self-center">
          <li>mes services</li>
          <li>mes valeurs</li>
          <li>mes clients</li>
          <li>mes parcours</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}
