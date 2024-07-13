const Section7 = () => {
  return (
    <div id="sec6" className="h-fit relative text-center">
      <div className="bg-[#FDFCDC] w-full h-full absolute -z-10"></div>
      {/* map */}
      
      {/* text */}
      <div className="flex flex-col md:flex-row justify-around w-full pb-10 px-10">
        <div className="text-center md:text-left py-10">
          <div>
            <span className="font-bold block">Präsident des Vereins: </span>
            <span className="my-2 block">
              Dr. Jalal Barout Tel. 0049/1608350767
            </span>
          </div>
          <div>
            <span className="font-bold block">Vizepräsident: </span>
            <span className="my-2 block">Mohamed Mousa</span>
          </div>
          <div>
            <span className="font-bold block">Postanschrift: </span>
            <span className="my-2 block">
              Johann-Herrmann-straße 1 <br />
              97078 Würzburg
            </span>
          </div>
          <div>
            <span className="font-bold block">Präsident des Vereins: </span>
            <span className="my-2 block">
              Dr. Jalal Barout Tel. 0049/1608350767
            </span>
          </div>
          <div>
            <span className="font-bold block">E-Mail: </span>
            <span className="my-2 block">d.a.gemeinschaft@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-2 flex-col md:flex-row items-center text-center md:text-left">
          <div className="w-44">
            <img className="w-full" src="/donate.svg" />
          </div>
          <div>
            <span className="font-bold block mb-4">Bankverbindung: </span>
            <span>
              Sparkasse Mainfranken Würzburg <br />
              IBAN<b> DE78 7905 0000 0049 8176 46</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
