import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Team = () => {
  return (
    <div className="container mx-auto mb-8 overflow-visible">
      <div className="flex items-center text-[#F06711] font-semibold text-[22px]">
        <hr className="w-12 bg-[#F06711] mt-2 border-none h-1" />
        <p className="ml-4">Our Team</p>
      </div>
      <h1 className="text-5xl font-extrabold">
        Discover the Faces Behind Our Success
      </h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/image/team/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="/image/team/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/team/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/team/4.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
