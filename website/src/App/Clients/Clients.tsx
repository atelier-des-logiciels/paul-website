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
    <div className="flex flex-col pb-24">
      <h3 className="text-center text-2xl font-semibold pb-12">Mes clients</h3>
      <div className="flex items-center w-5/6 flex-wrap self-center justify-center gap-12">
        <img
          src={airbus}
          alt="airbus logo"
          className="w-64 inline-block pr-4"
        />
        <img src={cnes} alt="cnes logo" className="w-64 inline-block pr-4" />
        <img
          src={orange}
          alt="orange logo"
          className="w-64 inline-block pr-4"
        />
        <img
          src={ecocert}
          alt="ecocert logo"
          className="w-64 inline-block pr-4"
        />
        <img src={allocine} alt="allocine logo" className="w-64 inline-block" />
        <img
          src={bravas}
          alt="bravas logo"
          className="w-64 inline-block pr-4"
        />
        <img src={dappy} alt="dappy logo" className="w-48 inline-block pr-4" />
        <img
          src={boostheat}
          alt="boostheat logo"
          className="w-64 inline-block pr-4"
        />
      </div>
    </div>
  );
}

export default Clients;
