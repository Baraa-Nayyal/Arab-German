const Card = ({ imageUrl, text }: { imageUrl: string; text: string }) => {
  return (
    <>
      <div className="flex border border-solid border-[#50B9C3] flex-col justify-center items-center bg-[#50b9c31f] hover:bg-[#50b9c370] w-1/3 lg:w-1/4 h-[200px] md:h-[300px] p-5 rounded-xl overflow-hidden transition-all">
        <div className="w-[40%] mx-auto">
          <img className="w-full object-cover" src={imageUrl} />
        </div>
        <p className="max-md:text-[12px]">{text}</p>
      </div>
    </>
  );
};
const Section4 = () => {
  return (
    <div id="sec4" className="h-fit relative text-center">
      <div className="bg-[#FDFCDC] w-full h-full absolute -z-10"></div>
      <h1 className="inline-block mb-10 mx-2">
        Diese Ziele werden durch Folgendes erreicht:
      </h1>
      <div className="flex justify-center lg:justify-between flex-wrap items-center gap-4 mx-0 lg:mx-24 pb-10">
        <Card
          imageUrl="/section42.png"
          text="Treffen, Feiern und kulturelle Seminare."
        />
        <Card
          imageUrl="/section46.png"
          text="Arabisch- und Koranlernkurse für Kinder und Erwachsene."
        />
        <Card
          imageUrl="/section41.png"
          text="Zusammenarbeit, ehrenamtliche Arbeit und Bereitstellung von Hilfe und Beratung für Mitglieder."
        />
        <Card
          imageUrl="/section43.png"
          text="Veranstaltung kulturellen Treffen und festlichen Anlässen."
        />
        <Card
          imageUrl="/section45.png"
          text="Deutschlernkurse mit Einführung in dasSystem und Leben in Deutschland."
        />
        <Card
          imageUrl="/section44.png"
          text="Der Verein plant einen festen Standort für die Treffen zu errichten."
        />
      </div>
    </div>
  );
};

export default Section4;
