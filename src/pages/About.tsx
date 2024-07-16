import { Tab, Tabs } from "@mui/material";
import { Box } from "lucide-react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const contentArray = [
    {
      id: 0,
      title: "International Book Club Meeting",
      description:
        "invites you to join our monthly book club meeting. The gathering will take place on July 10, 2024, at 5 PM at the following address:",
      venue: {
        name: "City Library",
        street: "123 Main Street",
        city: "12345 Springfield",
      },
      invitation:
        "This invitation is open to all book lovers and literature enthusiasts. We look forward to your participation! Refreshments will be provided, including coffee, tea, and light snacks.",
    },
    {
      id: 1,
      title: "Community Art Exhibition",
      description:
        "invites you to explore the creativity of local artists at our annual art exhibition. The event will be held on August 12, 2024, at 3 PM at the following address:",
      venue: {
        name: "Downtown Art Gallery",
        street: "456 Art Street",
        city: "67890 Metropolis",
      },
      invitation:
        "This invitation is open to art enthusiasts and the general public. We are excited to see you there! Enjoy a diverse range of artworks and meet the artists.",
    },
    {
      id: 2,
      title: "Charity Fundraising Gala",
      description:
        "invites you to our charity fundraising gala. The event will take place on September 25, 2024, at 7 PM at the following address:",
      venue: {
        name: "Grand Hotel Ballroom",
        street: "789 Charity Lane",
        city: "54321 Capital City",
      },
      invitation:
        "This invitation is open to all who wish to support our cause. We are looking forward to your presence! The evening will feature a gourmet dinner, live music, and a silent auction.",
    },
  ];

  return (
    <div id="sec2" className="h-fit relative">
      {/* <div className="overlay" /> */}
      {/* <div className=" fixed top-0 -z-[10] bg-cover"></div> */}
      <div className="bg-[#FDFCDC] w-full h-full absolute -z-10"></div>
      <div className="flex justify-center">
        <h2 className="inline text-center my-10">
          Hier finden Sie Informationen über <br /> uns und unsere Aktivitäten
        </h2>
      </div>
      <div className="grid grid-cols-12 px-10">
        <div className="col-span-12 lg:col-span-4 lg:col-start-2 flex flex-col mx-auto w-[300px] sm:w-[400px] lg:w-auto ">
          <div className="flex justify-between gap-6">
            <div>
              <img src="/about3.png" className="w-full" />
            </div>
            <div>
              <img src="/about2.png" className="w-full" />
            </div>
          </div>
          <div>
            <img src="/about.png" className="w-full" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6  lg:col-start-7 relative text-center lg:text-left">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            data-aos="fade-right"
            data-aos-once
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            <Tab className="text-[12px] sm:text-sm" label="alt" />
            <Tab className="text-[12px] sm:text-sm" label="neu" />
          </Tabs>
          <TabPanel value={value} index={0} className="mt-1">
            <div className="text-balance mb-1 block">
              <Swiper
                style={{ cursor: "grab" }}
                autoplay={{ delay: 1500 }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides
                draggable
                scrollbar={{ draggable: false }}
                modules={[Pagination, Navigation, Scrollbar, Autoplay]}
              >
                {contentArray.map((item) => (
                  <SwiperSlide key={item.id} className="mb-10">
                    <div className="flex text-center bg-[#50b9c31f] transition-all p-2 hover:bg-[#50b9c370] border-solid border-[#50B9C3] rounded-xl max-sm:text-sm mx-10 flex-col justify-center items-center">
                      <p>
                        {item.title}
                        {item.description}
                      </p>
                      <div className="text-left">
                        <span className="font-bold block">
                          {item.venue.name}
                        </span>
                        <span className="font-bold block">
                          {item.venue.street}
                        </span>
                        <span className="font-bold block">
                          {item.venue.city}
                        </span>
                      </div>
                      <p className="text-balance">{item.invitation}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className="mt-1">
            <div className="text-balance mb-1 block">
              {/* autoplay={{ delay: 1500 }} */}
              <Swiper
                style={{ cursor: "grab" }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides
                draggable
                scrollbar={{ draggable: false }}
                modules={[Pagination, Navigation, Scrollbar, Autoplay]}
              >
                {contentArray.map((item) => (
                  <SwiperSlide key={item.id} className="mb-10">
                    <div className="flex text-center bg-[#50b9c31f] transition-all p-2 hover:bg-[#50b9c370] border-solid border-[#50B9C3] rounded-xl max-sm:text-sm mx-10 flex-col justify-center items-center">
                      <p>
                        {item.title}
                        {item.description}
                      </p>
                      <div className="text-left">
                        <span className="font-bold block">
                          {item.venue.name}
                        </span>
                        <span className="font-bold block">
                          {item.venue.street}
                        </span>
                        <span className="font-bold block">
                          {item.venue.city}
                        </span>
                      </div>
                      <p className="text-balance">{item.invitation}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </TabPanel>

          {/* <div className="text-balance mb-1 block">
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides
              navigation
              modules={[Pagination, Navigation]}
            >
              {Array.from({ length: 3 }).map((item, i) => {
                return (
                  <SwiperSlide className="mb-10">
                    <div className="flex text-center flex-col justify-center items-center">
                      <p>
                        <b>{i}</b>
                        Die Deutsch-Arabische Gemeinschaft e.V. in Würzburg lädt
                        Sie herzlich zu einem Kennenlernen und zur Vorstellung
                        unseres Vereins ein. Das Treffen findet am 2. Juni 2024
                        um 14 Uhr statt und zwar in den Räumlichkeiten des
                        Adresse:
                      </p>
                      <div className="text-left">
                        <span className="font-bold block">
                          DITIB Türkisch-Islamischen Kulturvereins
                        </span>
                        <span className="font-bold block">
                          Äußere Aumühlstraße 11
                        </span>
                        <span className="font-bold block">97076 Würzburg</span>
                      </div>

                      <p className="text-balance">
                        Diese Einladung richtet sich an Frauen und Männer sowie
                        an alle, die sich für unseren Verein interessieren. Wir
                        freuen uns auf Ihr Erscheinen! Für Ihr leibliches Wohl
                        ist gesorgt, es erwarten Sie heiße und kalte Getränke
                        sowie eine Auswahl an Kuchen und Gebäck.
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="my-8 max-lg:mx-auto w-44 overflow-hidden">
              <svg
                width="288"
                height="2"
                viewBox="0 0 288 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H288" stroke="#50B9C3" strokeDasharray="12 12" />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
