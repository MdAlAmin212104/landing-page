import { IoLocationOutline } from "react-icons/io5";
import useData from "../../../hook/useData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PopularSection = () => {
    const [house] = useData();

    return (
        <div className="container mx-auto mt-8 Poppins">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold Montserrat">
                    Popular Properties
                </h1>
                <p className="text-[#0059B1] underline">See all property</p>
            </div>
            <Swiper
                modules={[Navigation]}
                slidesPerGroup={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    // When the screen width is >= 640px (small screens)
                    640: {
                        slidesPerView: 1, // Display 1 slide
                    },
                    // When the screen width is >= 768px (medium screens)
                    768: {
                        slidesPerView: 2, // Display 2 slides
                    },
                    // When the screen width is >= 1024px (large screens)
                    1024: {
                        slidesPerView: 3, // Display 3 slides
                    },
                }}
                className="mySwiper"
            >
                {house.map((item) => (
                    <SwiperSlide key={item.image}>
                        <div className="card-compact bg-[#F9FAFB]">
                            <figure className="h-[200px]">
                                <img
                                    src={item.image}
                                    alt="House Image"
                                    className="w-full"
                                />
                            </figure>
                            <div className="flex justify-between m-4">
                                <h1 className="text-[#00254A] bg-[#C5E2FF] rounded-xl px-2">Apartment </h1>
                                <p className="font-medium"><span className="text-[#EE6611]">&#9632;</span>Ready to Move</p>
                            </div>
                            <hr className="mx-4" />
                            <div className="card-body">
                                <h2 className="card-title Montserrat">{item.title}</h2>
                                <p className="flex gap-2"><IoLocationOutline className="text-xl text-[#EE6611]" />{item.location}</p>
                                <div className="card-actions justify-start">
                                    <p className="Montserrat text-2xl font-semibold">${item.fixed_price}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr className="mt-6" />
        </div>
    );
};

export default PopularSection;
