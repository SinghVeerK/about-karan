import React from 'react'
import "./testimonials.css"

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    image:require("../../asset/user2.png"),
    subtitle:"Suresh",
    title:"Designer",
    comment:"I enjoy working with  the theme and learn so much. You guys make the proccess fun and intresting. Good Luck! 👍"
  },
  {
    id:2,
    image:require("../../asset/female.png"),
    subtitle:"Srishti",
    title:"Cloud Developer",
    comment:"I enjoy working with  the theme and learn so much. You guys make the proccess fun and intresting. Good Luck! 👍"
  },
  {
    id:3,
    image:require("../../asset/female.png"),
    subtitle:"Yashika",
    title:"Developer",
    comment:"I enjoy working with  the theme and learn so much. You guys make the proccess fun and intresting. Good Luck! 👍"
  }

]

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      
      <Swiper  class="swiper" className="testimonials__container grid"
      // install swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor= {true}
      pagination={{clickable:true}}
  >
      
        {data.map(({id,image,title,subtitle,comment})=>{
          return(
            <SwiperSlide class="swiper-slide" className="testimonial__item" key={id}>
              <div className="thumb"></div>
                <img src={image} alt="" />
                <h3 className="testimonial__title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
    )
}

export default Testimonials