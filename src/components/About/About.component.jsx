import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { ReactComponent as Image } from '../../assets/about-section/icon-pack.svg';
import placeholder from "../../assets/about-section/placeholder.svg"
import placeholder_2 from "../../assets/about-section/placeholder_2.svg"
import './About.styles.scss';

const AboutUs = () => (
  <section id='about' className='section section-about'>
    <img className='placeholder' src={placeholder}/>
    <img className='placeholder_2' src={placeholder_2}/>
    <Fade bottom delay={100}>
      <h1 className='section-heading'>About</h1>
    </Fade>
    <div className='section-content'>
      <div className='info'>
        <Fade bottom delay={150}>
          <p>
            The key to unlock the effect of this pandemic isn't just a vaccine.
            It requires a paradigm shift in the monotony of life for students.
            With classes going online and anxiety clouding their thoughts, a
            little burst of magic is imperative to keep them motivated. We're
            here to create that magic.
          </p>
        </Fade>
      </div>
      <div className='image-container'>
        <Zoom delay={200}>
          {/* <Image className='image' /> */}
        </Zoom>
      </div>
    </div>
  </section>
);

export default AboutUs;
