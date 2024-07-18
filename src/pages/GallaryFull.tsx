import { Dialog, IconButton } from "@mui/material";
import { X } from "lucide-react";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./GallaryFull.css";

import {
  Autoplay,
  Navigation,
  Thumbs,
  FreeMode,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Card = ({ openDialog }: { openDialog: () => void }) => {
  return (
    <div
      onClick={openDialog}
      className="relative group overflow-hidden w-56 h-56 cursor-pointer hover:scale-110 transition-all duration-500 mx-auto"
    >
      <img
        className="w-full h-full object-cover rounded-xl"
        src="/about3.png"
        alt=""
      />
      <div className="absolute top-0 transition-all w-full text-clip text-center text-lg p-2 bg-gradient-to-b from-black/70 to-transparent rounded-t-xl">
        <span className="text-white font-bold text-center">Title</span>
      </div>
      <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl text-center">
        <span className="text-white text-center">Description line</span>
        <br />
        <span className="text-white text-center">Description line 2</span>
      </div>
    </div>
  );
};

const GallaryFull = () => {
  const [open, setOpen] = React.useState(false);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setThumbsSwiper(null);
  };

  const openy = () => {
    setOpen(true);
  };

  const MainSwiperImage = () => {
    return (
      <div className="w-full sm:w-[80%] mx-auto h-full">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/city2.png"
        />
      </div>
    );
  };

  const PaginationSwiperImages = () => {
    return (
      <div className="w-full mx-auto h-[100px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/about3.png"
        />
      </div>
    );
  };

  return (
    <>
      <div id="GallaryFull" className="h-fit  relative flex items-center">
        <div className="twoOverlay h-full w-full absolute z-10"></div>
        <Dialog fullScreen open={open} onClose={handleClose}>
          <div className="bg-primary w-full h-full">
            <div className="absolute z-50">
              <IconButton onClick={handleClose}>
                <X />
              </IconButton>
            </div>

            <Swiper
              style={{
                cursor: "grab",
                "--swiper-navigation-color": "#219dbc",
                "--swiper-pagination-color": "#219dbc",
              }}
              navigation={true}
              pagination={{
                type: "fraction",
              }}
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides
              draggable
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Autoplay, Navigation, Thumbs, Pagination]}
              className="mySwiper2"
            >
              {[...Array(5)].map((_, i) => (
                <SwiperSlide key={i}>
                  <MainSwiperImage />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* navigation swiper */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {[...Array(5)].map((_, i) => (
                <SwiperSlide key={i}>
                  <PaginationSwiperImages />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dialog>
        <div className=" mx-auto px-4 z-20 py-24">
          <div className="text-center mb-10 mt-24">
            <h1 className="inline">Vollständige Galerie</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(7)].map((_, i) => (
              <Card key={i} openDialog={openy} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GallaryFull;
