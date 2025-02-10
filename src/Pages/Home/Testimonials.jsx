import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = ({ testimonialsData }) => {
  return (
    <div className="w-full flex justify-center ">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-4xl"
      >
        {testimonialsData.map((testimonial, index) => {
          const { name, image, review, rating } = testimonial;
          return (
            <SwiperSlide key={index} className=" bg-gray-200 p-6 text-center  shadow-xl rounded-xl">
              <div className="flex flex-col items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt={name} />
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-semibold">{name}</h2>
                <p className="mt-2 text-gray-500 italic">"{review}"</p>
                
                <div className="mt-2">
                <Rating style={{ maxWidth: 250 }} value={rating}  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
