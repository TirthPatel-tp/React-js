import React from 'react'
import './testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
// import { Pagination } from "swiper";
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css'


function testimonial() {
    const clients = [
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem provident, expedita minima nostrum quasi architecto aliquid incidunt ex cum eum magni ipsum atque at dignissimos eius et! Dicta, tempore?"
        },
        {
            img: profilePic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem provident, expedita minima nostrum quasi architecto aliquid incidunt ex cum eum magni ipsum atque at dignissimos eius et! Dicta, tempore?"
        },
        {
            img: profilePic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem provident, expedita minima nostrum quasi architecto aliquid incidunt ex cum eum magni ipsum atque at dignissimos eius et! Dicta, tempore?"
        },
        {
            img: profilePic4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem provident, expedita minima nostrum quasi architecto aliquid incidunt ex cum eum magni ipsum atque at dignissimos eius et! Dicta, tempore?"
        }
    ]


  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* Slider  */}
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}>
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                    <div className="testimonial" id='Testimonials'>
                    <img src={client.img} alt='client1' />
                    <span>{client.review}
                    </span>
                        </div>
                    </SwiperSlide>
                )
            })}


        </Swiper>
    </div>
  )
}

export default testimonial