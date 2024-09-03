// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";
const Testimonials = () => {
  return (
    <div className="container mx-auto">
      <h1 className="Montserrat text-5xl font-bold text-center my-6">
        Testimonials
      </h1>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card bg-[#ECF5FF] text-black mx-4 Poppins w-[590px]">
              <div className="card-body items-center text-center">
                <h1 className="text-3xl text-[#FEC84B] flex gap-4">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <IoStar className="text-[#F4E6C5]" />
                </h1>
                <p className="px-16">
                  &rdquo;The level of security provided by CypherPlay is
                  unmatched. I feel confident using my card for both everyday
                  purchases and travel. It`s the peace of mind I was looking
                  for.&rdquo;
                </p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[48px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h1 className="Montserrat font-bold text-xl">Tony Stark</h1>
                <p>Marketing manager, XYZ</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-[#ECF5FF] text-black mx-4 Poppins w-[590px]">
              <div className="card-body items-center text-center">
                <h1 className="text-3xl text-[#FEC84B] flex gap-4">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <IoStar className="text-[#F4E6C5]" />
                </h1>
                <p className="px-16">
                  &rdquo;The level of security provided by CypherPlay is
                  unmatched. I feel confident using my card for both everyday
                  purchases and travel. It`s the peace of mind I was looking
                  for.&rdquo;
                </p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[48px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h1 className="Montserrat font-bold text-xl">Tony Stark</h1>
                <p>Marketing manager, XYZ</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-[#ECF5FF] text-black mx-4 Poppins w-[590px]">
              <div className="card-body items-center text-center">
                <h1 className="text-3xl text-[#FEC84B] flex gap-4">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <IoStar className="text-[#F4E6C5]" />
                </h1>
                <p className="px-16">
                  &rdquo;The level of security provided by CypherPlay is
                  unmatched. I feel confident using my card for both everyday
                  purchases and travel. It`s the peace of mind I was looking
                  for.&rdquo;
                </p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[48px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h1 className="Montserrat font-bold text-xl">Tony Stark</h1>
                <p>Marketing manager, XYZ</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-[#ECF5FF] text-black mx-4 Poppins w-[590px]">
              <div className="card-body items-center text-center">
                <h1 className="text-3xl text-[#FEC84B] flex gap-4">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <IoStar className="text-[#F4E6C5]" />
                </h1>
                <p className="px-16">
                  &rdquo;The level of security provided by CypherPlay is
                  unmatched. I feel confident using my card for both everyday
                  purchases and travel. It`s the peace of mind I was looking
                  for.&rdquo;
                </p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[48px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h1 className="Montserrat font-bold text-xl">Tony Stark</h1>
                <p>Marketing manager, XYZ</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-[#ECF5FF] text-black mx-4 Poppins w-[590px]">
              <div className="card-body items-center text-center">
                <h1 className="text-3xl text-[#FEC84B] flex gap-4">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <IoStar className="text-[#F4E6C5]" />
                </h1>
                <p className="px-16">
                  &rdquo;The level of security provided by CypherPlay is
                  unmatched. I feel confident using my card for both everyday
                  purchases and travel. It`s the peace of mind I was looking
                  for.&rdquo;
                </p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[48px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h1 className="Montserrat font-bold text-xl">Tony Stark</h1>
                <p>Marketing manager, XYZ</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-[#ECF5FF] text-black mx-4 Poppins w-[590px]">
              <div className="card-body items-center text-center">
                <h1 className="text-3xl text-[#FEC84B] flex gap-4">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <IoStar className="text-[#F4E6C5]" />
                </h1>
                <p className="px-16">
                  &rdquo;The level of security provided by CypherPlay is
                  unmatched. I feel confident using my card for both everyday
                  purchases and travel. It`s the peace of mind I was looking
                  for.&rdquo;
                </p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[48px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h1 className="Montserrat font-bold text-xl">Tony Stark</h1>
                <p>Marketing manager, XYZ</p>
                
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
