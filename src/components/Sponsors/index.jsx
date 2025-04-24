import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./style.module.css";

import { Autoplay } from "swiper/modules";

const Sponsors = ({ data }) => {
  return (
    <div className={styles.sponsors}>
      <Swiper
        spaceBetween={100}
        slidesPerView={6}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
        modules={[Autoplay]}
      >
        {data.map((sponsor, key) => (
          <SwiperSlide key={key}>
            <img src={sponsor?.image} className={styles.logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
