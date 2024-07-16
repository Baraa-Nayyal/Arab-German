import "./style.css";

const Section3 = () => {
  return (
    <div
      id="sec3"
      className="h-fit max-lg:py-10 lg:h-[100vh] relative flex items-center"
    >
      <div className="twoOverlay h-full w-full absolute z-10"></div>
      <div className="bgSection bg" />

      <div className="container mx-auto px-4 z-20">
        <div className="text-center my-10">
          <h1 className="inline">Unsere Ziele</h1>
          <p>
            ein gemeinnütziger Verein, eingetragen am 3. April 2024 in Würzburg
            und hat folgende Ziele:
          </p>
        </div>
        <div className="flex flex-col gap-4 mx-10 text-center lg:flex-row lg:justify-between">
          <p className="transition-all bg-[#fdfcdc70] hover:bg-[#FDFCDC] my-1 font-bold  lg:text-xl p-8 w-full lg:w-1/3 flex items-center rounded-xl">
            Förderung der Integration in die deutsche Gesellschaft unter
            Bewahrung der arabisch-islamischen Kultur unter Berücksichtigung der
            multikulturellen deutschen Gesellschaft.
          </p>
          <p className="transition-all bg-[#fdfcdc70] hover:bg-[#FDFCDC]  my-1 font-bold  lg:text-xl p-8 w-full lg:w-1/3 flex items-center rounded-xl">
            Förderung von Kennenlernen und Zusammenarbeit zwischen Mitgliedern
            der Gemeinschaft.
          </p>
          <p className="transition-all bg-[#fdfcdc70] hover:bg-[#FDFCDC]  my-1 font-bold  lg:text-xl p-8 w-full lg:w-1/3 flex items-center rounded-xl">
            Sensibilisierung für die Gefahren von Rassismus und Extremismus in
            all seinen Formen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
