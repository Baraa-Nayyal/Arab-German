const Card = ({ imageUrl, text }: { imageUrl: string; text: string }) => {
  return (
    <>
      <div className="bg-[#fdfcdc70] hover:bg-[#FDFCDCCC] w-full md:w-1/3 flex flex-col justify-center items-center rounded-xl p-5 h-fit md:h-[280px] border border-solid border-[#50B9C3] transition-all">
        <div className="w-[100px]">
          <img className="w-full object-contain" src={imageUrl} alt="" />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

const Section5 = () => {
  return (
    <div id="sec5" className="h-full md:h-[100vh] relative flex items-center py-24">
      <div className="twoOverlay h-full w-full absolute z-10"></div>
      <div className="bgSection bg" />
      <div className="z-20 w-full">
        <div className="text-center flex flex-col items-center my-10">
          <h1 className="inline-block">Mitgliedschaft</h1>
          <p className="max-w-[900px] mx-10 text-balance">
            Mitglied werden kann jeder ab 16 Jahren (männlich und weiblich), der
            den Prinzipien und Zielen des Vereins zustimmt. Die Mitgliedschaft
            kann schriftlich oder elektronisch beantragt werden.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mx-10 text-center justify-center items-center">
          <Card
            text="Mitglied werden kann jeder ab 16 Jahren (männlich und weiblich)"
            imageUrl="/sixteen.svg"
          />
          <Card
            text="Der den Prinzipien und Zielen des Vereins zustimmt."
            imageUrl="/talk.svg"
          />
          <Card
            text="Die Mitgliedschaft kann schriftlich oder elektronisch beantragt werden."
            imageUrl="/email.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
