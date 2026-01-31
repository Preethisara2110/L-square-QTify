import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './Carusel.module.css'
import Card from "../Card";
import { CircularProgress } from "@mui/material";

function Carusel({ data, uniqueName }) {
  const navigate = useNavigate();

  return (
    <div className="px-10 py-3 relative">
      <button className={`caruselbtn swiper-button-prev custom-prev-${uniqueName}`}>
        <img src="arrowl.svg" className={styles.prev} />
      </button>
      <button className={`caruselbtn  swiper-button-next custom-next-${uniqueName}`}>
        <img src="arrowr.svg" className={styles.next} />
      </button>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{ clickable: true }}
        navigation={{
          prevEl: `.custom-prev-${uniqueName}`,
          nextEl: `.custom-next-${uniqueName}`,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1124: { slidesPerView: 5 },
          1600: { slidesPerView: 7 },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        
        { data.length === 0 ?  <CircularProgress />  
        :              
        data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              carddata={item}
              onClick={() => navigate("/details", { state: { details: item } })}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carusel;