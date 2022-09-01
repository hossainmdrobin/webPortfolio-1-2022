import React from 'react';
import './testimonials.css'
import avater1 from './../../assets/robin.png'
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            
            className="container testmonials__container">
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                    <img src={avater1} alt="" />
                    </div>
                    
                    <h5 className='client__name'>Hridoy chandra das</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iste doloremque dolore voluptates unde quisquam neque culpa similique nostrum accusamus.
                    </small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={avater1} alt="" />
                    </div>
                    <h5 className='client__name'>Hridoy chandra das</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iste doloremque dolore voluptates unde quisquam neque culpa similique nostrum accusamus.
                    </small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={avater1} alt="" />
                    </div>
                    <h5 className='client__name'>Hridoy chandra das</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iste doloremque dolore voluptates unde quisquam neque culpa similique nostrum accusamus.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimonials;
