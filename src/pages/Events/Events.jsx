import React, {useEffect } from 'react';

import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import { events } from '../../data/events.data';


import Event from './Event.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Events.styles.scss';
import { Button} from 'react-bootstrap';

const Events = ({history}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  const mapFreeEvents = (events) =>
    events.map((event,index) => (
      <React.Fragment>
        {event.registrationFee === 'FREE' && (
          <Event key={event.code} event={event} index={index}/>
        )}
      </React.Fragment>
    ));


  const displayAllFreeEvents = (events) => {
    return (
      <React.Fragment>
        {mapFreeEvents(events.hackTheCrisis)}
        
      </React.Fragment>
    );
  };

 

  // const searchBar=()=>{
  //   return(
  //     <Fade bottom delay={150}>
  //     <div
  //       className={`events-list ${isListOpen ? 'open' : ''}`}
  //       onClick={() => toggleList(!isListOpen)}
  //     >
  //       <div className='title'>List of Events</div>
  //       <div className='list'>
  //         <ul>
  //           {eventsList.map((event, i) => (
  //             <li key={i}>
  //               <AnchorLink offset='620' href={`#${event.code}`}>
  //                 {event.name}
  //               </AnchorLink>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </Fade>
  //   );
  // }

  const clickHandler=()=>{
    history.push('/event/hack-the-crisis');
  }

  return (
    <React.Fragment>
      <section id='events' className='section section-events' >
        <Fade top>
          <Jumbotron style={{backgroundColor:'#212121', color:'#fff',textAlign:'center',marginTop:'50px', padding:'10px'}} fluid={true}>
            <h1>HackTheCrisis</h1>
            <p>The hackathon - &quot;HacktheCrisis&quot; - is being organized in collaboration with the students&#39; chapter of Team ISTE from various colleges across the nation to solicit suggestions for containing the spread of coronavirus and developing strategies to cope with its aftermath</p>
                <p>The participating teams will be working to formulate solutions for various problem statements</p>
                <Button 
                onClick={()=>clickHandler()} 
                style={{backgroundColor:'#0d7377',color:'#ffff',borderColor:'#14ffec',borderRadius:'25px'}}
                >
                  Know More
                </Button>
          </Jumbotron>
        </Fade>

        <div className='section-content'>
       
          <Jump forever>
            <h2 className='section-sub-heading'>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className='icon arrow-down'
              />
              Other Events
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className='icon arrow-down'
              />
            </h2>
          </Jump>
          {displayAllFreeEvents(events)}
        </div>

        <div className='illustration-container'>
          <div className='illustration'>
            <Illustration />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Events;
