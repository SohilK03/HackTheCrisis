import React from 'react';
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Divider } from '../../assets/illustrations/section-divider.svg';

const Event = ({ event,index }) => {
  const {
    code,
    name,
    date,
    team,    
    registrationLink,
    poster,
    description
  } = event;

  const onClickHandler = (name, registrationLink) => (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "'Event Registration' Clicks",
      action: `'${name}' button click`,
      label: `'${name}' registration button clicked`
    });
    window.open(registrationLink, '_blank');
  };

  return (
    <React.Fragment>
      <div id={code} className={`event-container ${code}`}>
        {
        index%2===0 ?
         <Fade delay={250}>
          <div className='poster'>
            <img src={poster} alt='poster' />
          </div>
        </Fade> 
        : 
        <></>
        }
        
        <div className='info'>
          <Fade bottom delay={200}>
            <h2 className='event-name'>{name}</h2>
          </Fade>
          <Fade bottom delay={200}>
            <div className='description'>{description}</div>
          </Fade>
          <Fade bottom delay={400}>
            <p>
              <span>Date: </span>
              <span className='underline'>{date}</span>
            </p>
          </Fade>
          
          <Fade bottom delay={400}>
            <p>
              <span>Team Size: </span>
              <span className='underline'>{team}</span>
            </p>
          </Fade>
         
                  
          <Fade bottom delay={600}>
            <p>
              <span>To Register: </span>
              {registrationLink ? (
                <span
                  className='register-link'
                  onClick={onClickHandler(name, registrationLink)}
                >
                  Click here
                </span>
              ) : (
                <span className='register-link'>Opening Soon!</span>
              )}
            </p>
          </Fade>
        </div>
        {
        index%2!==0 ?
         <Fade delay={250}>
          <div className='poster'>
            <img src={poster} alt='poster' />
          </div>
        </Fade> 
        : 
        <></>
        }
      </div>

      <Fade delay={150}>
        <div className='divider-container'>
          <Divider className='divider' />
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default Event;
