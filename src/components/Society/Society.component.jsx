import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { societies } from '../../data/societies.data';
//import { events } from '../../data/events.data';

import './Society.styles.scss';

const Society = (props) => {
  // console.log(props);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const index = societies.findIndex((society) => {
    // console.log(
    //   society.name.toLowerCase(),
    //   props.match.params.societyName,
    //   society.name.toLowerCase() === props.match.params.societyName
    // );
    return society.name.toLowerCase() === props.match.params.societyName;
  });

  // console.log(index);
  let society = null;

  if (index === -1) {
    return <Redirect to='/' />;
  } else {
    society = societies[index];
    // society.events = events[society.name.toLowerCase()].map(
    //   (events) => events.name
    // );
  }

  const scrollWithOffset = (el, offset) => {
    scroll.scrollTo(el.offsetTop - offset);
  };

  return (
    <section id='society' className='section section-society'>
      <div className='back-btn'>
        <span>
          <HashLink
            smooth
            to='/#societies'
            scroll={(el) => scrollWithOffset(el, 50)}
          >
            <FontAwesomeIcon icon={faArrowLeft} className='icon' /> Back
          </HashLink>
        </span>
      </div>
      <div className='section-content'>
        <div className='logo'>
          <Fade bottom delay={100}>
            <img src={society.logo} alt='society' />
          </Fade>
        </div>
        <div className='info'>
          <Fade bottom delay={200}>
            <div className='intro'>{society.description}</div>
          </Fade>
          {/* <div className='events'>
            <Fade bottom delay={450}>
              <h2>Events:</h2>
            </Fade>
            <div className='events-list'>
              <Fade bottom delay={300}>
                <ul>
                  {society.events.map((event, i) => (
                    <li key={i}>
                      <span className='underline'>{event}</span>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          </div> */}
        </div>

        <Fade bottom delay={300}>
          <div className='society-social-icons'>
            {society.linkedInURL && (
              <a
                href={society.linkedInURL}
                className='social-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className='icon linkedin'
                />
              </a>
            )}
            {society.instagramURL && (
              <a
                href={society.instagramURL}
                className='social-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='icon instagram'
                />
              </a>
            )}
            {society.twitterURL && (
              <a
                href={society.twitterURL}
                className='social-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
              </a>
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Society;
