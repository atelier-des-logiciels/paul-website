import airbus from './images/airbus.png';
import bravas from './images/bravas.png';
import cnes from './images/cnes.png';
import ecocert from './images/ecocert.png';
import allocine from './images/allocine.png';
import orange from './images/orange.png';
import boostheat from './images/boostheat.png';
import dappy from './images/dappy.png';

function Clients() {
  return (
    <div className="flex flex-col pb-32 pt-4 md:pt-12">
      <h3 className="text-center text-2xl font-semibold pb-12">
        Ils ont fait appel à moi
      </h3>
      <div className="flex items-center w-5/6 flex-wrap self-center justify-center gap-12">
        <a
          href="https://www.airbus.com/"
          title="site web d'Airbus"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={airbus}
            alt="airbus logo"
            className="w-64 inline-block pr-4"
          />
        </a>
        <a
          href="https://www.cnes.fr"
          title="site web du CNES"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cnes} alt="cnes logo" className="w-64 inline-block pr-4" />
        </a>
        <a
          href="https://www.orange.fr"
          title="site web d'Orange"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={orange}
            alt="orange logo"
            className="w-64 inline-block pr-4"
          />
        </a>
        <a
          href="https://www.ecocert.com"
          title="site web d'Ecocert"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ecocert}
            alt="ecocert logo"
            className="w-64 inline-block pr-4"
          />
        </a>
        <a
          href="https://www.allocine.fr"
          title="site web d'Allociné"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={allocine}
            alt="allocine logo"
            className="w-64 inline-block"
          />
        </a>
        <a
          href="https://www.bravas.io"
          title="site web de Bravas"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={bravas}
            alt="bravas logo"
            className="w-64 inline-block pr-4"
          />
        </a>
        <a
          href="https://dappy.tech"
          title="site web de Dappy"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={dappy}
            alt="dappy logo"
            className="w-48 inline-block pr-4"
          />
        </a>
        <a
          href="https://boostheat.fr"
          title="site web de Boostheat"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={boostheat}
            alt="boostheat logo"
            className="w-64 inline-block pr-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Clients;
