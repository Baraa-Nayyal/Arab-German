import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Card = () => {
  return (
    <div id="sec8" className="max-w-sm mx-auto z-20 ">
      <div className="bg-[#FDFCDC] shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="/about3.png"
          alt="Gallery Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Title</h2>
          <p className="text-gray-700 text-base">
            This is a description of the gallery card. It provides some details
            about the image shown above.
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallary = () => {
  return (
    <>
      <div className="h-fit max-lg:py-10 lg:h-[100vh] relative flex items-center">
        <div className="twoOverlay h-full w-full absolute z-10"></div>
        <div className="container mx-auto px-4 z-20">
          <div className="text-center mb-24">
            <h1 className="inline">Galerie</h1>
          </div>
          <div>
            <Swiper
              style={{ cursor: "grab" }}
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              autoplay={{ delay: 1500 }}
              centeredSlides
              draggable
              modules={[Pagination, Navigation, Scrollbar, Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className="mb-10">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="mb-10">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="mb-10">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="mb-10">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="mb-10">
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
