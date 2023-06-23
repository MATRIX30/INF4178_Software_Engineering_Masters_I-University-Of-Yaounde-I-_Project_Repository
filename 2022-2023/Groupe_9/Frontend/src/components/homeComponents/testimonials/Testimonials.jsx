import React from 'react';
// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css'
import TestimonialItem from './TestimonialItem';
import jugalux from '../../../assets/photos/jugalux.jpeg'
import doyen from '../../../assets/photos/doyen.jpg'
import kirito from '../../../assets/photos/kirito.jpeg'
import essi from '../../../assets/photos/essi.jpeg'


const Testimonials = () => {


    return (
        <div className="container-xxl pb-5 wow fadeInUp" data-wow-delay="0.1s">
            {/* <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-success px-3">Testimonial</h6>
                    <h3 className="mb-5">Platform farmers said !</h3>
                </div>
                <OwlCarousel items={3} className="owl-carousel testimonial-carousel position-relative" loop={false} nav margin={8}>
                    <TestimonialItem
                        imageUrl={jugalux}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                    <TestimonialItem
                        imageUrl={kirito}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                    <TestimonialItem
                        imageUrl={doyen}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                    <TestimonialItem
                        imageUrl={essi}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                    <TestimonialItem
                        imageUrl={jugalux}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                    <TestimonialItem
                        imageUrl={kirito}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                    <TestimonialItem
                        imageUrl={doyen}
                        userName={'Simson Brown'}
                        userStatus={'Investor'}
                        testimonial='Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
                    />
                </OwlCarousel>
            </div> */}
        </div>
    )
}

export default Testimonials