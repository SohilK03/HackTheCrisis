import React, { useState } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faLink } from '@fortawesome/free-solid-svg-icons';
import Countdown from 'react-countdown';

export const HackTheCrisis = () => {
  const listOfSections = [
    {
      name: 'About',
      id: 'about',
      render: (
        <Fade>
          <h2 className='section-sub-heading' id='about'>
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              className='icon arrow-down'
            />
            About
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              className='icon arrow-down'
            />
          </h2>
          <p>
            The hackathon - &quot;HacktheCrisis&quot; - is being organized in
            collaboration with the students&#39; chapter of Team ISTE from
            various colleges across the nation to solicit suggestions for
            containing the spread of coronavirus and developing strategies to
            cope with its aftermath.
          </p>
        </Fade>
      ),
    },
    {
      name: 'Problem Statements',
      id: 'problem-statements',
      render: (
        <Fade>
          <h2 className='section-sub-heading' id='problem-statements'>
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              className='icon arrow-down'
            />
            Problem Statements
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              className='icon arrow-down'
            />
          </h2>
          <p>
            The participating teams will be working to formulate solutions for
            problem statements similar to the ones mentioned below.
          </p>
          <ol>
            <li>
              1. Aiding local businesses in current and post-pandemic
              situations.
            </li>
            <li>2. Administering care to those who are at immediate risk.</li>
            <li>
              3. Downsizing the development and use of duplicate medicines.
            </li>
          </ol>
        </Fade>
      ),
    },
    {
      name: 'Registration Link',
      id: 'registration-link',
      render: (
        <Fade>
          <h2 className='section-sub-heading' id='registration-link'>
            <FontAwesomeIcon icon={faLink} />
            Registration Link
          </h2>
          <p>
            Our contest will be hosted on D2C. Please{' '}
            <a
              style={{ color: 'blue' }}
              href={'https://dare2compete.com/o/pySvm2u?refId=SkKQCY0'}
              target='__blank'
            >
              click here
            </a>{' '}
            to register
          </p>
        </Fade>
      ),
    },
  ];

  const [isListOpen, toggleList] = useState(false);
  const [selectedSection, toggleSelection] = useState(listOfSections[0]);

  const searchBar = () => {
    return (
      <Fade bottom delay={150}>
        <div
          className={`events-list ${isListOpen ? 'open' : ''} mt-4`}
          onClick={() => toggleList(!isListOpen)}
        >
          <div className='title'>{selectedSection.name}</div>
          <div className='list'>
            <ul>
              {listOfSections.map((section, index) => {
                return (
                  <li key={index}>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => toggleSelection(listOfSections[index])}
                      offset='620'
                    >
                      {section.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Fade>
    );
  };

  const renderer = ({ hours, minutes, seconds, days }) => {
    return (
      <Container>
        <Row>
          <div className='col-3 border-right'>
            <span className='fs-1'>{days}</span>
            <br />
            <span className='text-muted fs-6'>Days</span>
          </div>
          <div className='col-3 border-right'>
            <span className='fs-1'>{hours}</span>
            <br />
            <span className='text-muted fs-6'>Hours</span>
          </div>
          <div className='col-3 border-right'>
            <span className='fs-1'>{minutes}</span>
            <br />
            <span className='text-muted fs-6'>Mins</span>
          </div>
          <div className='col-3'>
            <span className='fs-1'>{seconds}</span>
            <br />
            <span className='text-muted fs-6'>Secs</span>
          </div>
        </Row>
      </Container>
    );
  };

  const renderCountDown = () => {
    console.log(Date.UTC(2021, 5, 20));
    return (
      <>
        <h2 className='section-sub-heading' id='problem-statements'>
          Starts in...
        </h2>
        <Countdown date={'2021-05-20T00:00:00'} renderer={renderer} />
      </>
    );
  };

  return (
    <section id='events' className='section section-events'>
      <Fade top>
        <Jumbotron
          className='mt-3'
          style={{
            backgroundColor: '#212121',
            color: '#fff',
            textAlign: 'center',
            marginTop: '50px',
            padding: '10px',
          }}
        >
          <h1>HackTheCrisis</h1>
          <p>
            Any new crisis necessitates a fresh collection of ideas and methods
            for coping with it. As a result, it is up to us to pool our
            resources and devise ideas and strategies that can be quickly
            developed using technology and deployed on the ground to counter the
            outbreak of the COVID-19 pandemic
          </p>
        </Jumbotron>
      </Fade>

      <div className='section-content'>
        {renderCountDown()}
        {searchBar()}
        {selectedSection.render}
      </div>
    </section>
  );
};
