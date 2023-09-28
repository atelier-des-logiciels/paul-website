function Footer() {
  return (
    <div className="bg-primary-900 bottom-0 w-full text-white p-6 flex justify-center gap-24">
      <div className="flex gap-12 flex-initial w-1/6 lg:w-2/12">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold" id="contact">
            Contactez-moi
          </h3>
          <div>
            <p>Téléphone:</p>
            <a href="tel:0613281158">06 13 28 11 58</a>
          </div>
          <div>
            <p>Email:</p>
            <a href="mailto:paul@musso.io">paul@musso.io</a>
          </div>
        </div>
      </div>
      <div className="flex-initial w-5/6 md:w-3/6 lg:w-5/12">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Navigation</h3>
          <div className="flex gap-2 flex-col">
            <a href="/services">Mes services</a>
            <a href="/values">Mes valeurs</a>
            <a href="/clients">Mes clients</a>
            <a href="/cv">Mon parcours</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
