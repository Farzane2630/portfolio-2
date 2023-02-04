import React from 'react'
import Header from '../components/Header/Header'
import Services from '../components/services/Services/Services'
import About from '../components/About/About'
import Pricing from '../components/Pricing/Pricing'
import WhyUs from '../components/WhyUs/WhyUs'
import Brand from '../components/Brand/Brand'
import Case from '../components/Case/Case'
import TestimonialSection from '../components/Testimonial/TestimonialSection'
import Contact from '../components/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Pricing />
      <WhyUs />
      <Brand />
      <Case />
      <TestimonialSection />
      <Contact />
    </>
  )
}
