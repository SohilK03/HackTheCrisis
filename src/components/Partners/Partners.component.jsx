import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { partners, PARTNER_TYPE } from '../../data/partners.data';

import './Partners.styles.scss';
import placeholder_2 from '../../assets/about-section/placeholder_2.svg';

const Partners = ({ history }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const onClickHandler = (route) => {
    history.push(`/partner/${route}`);
  };

  return (
    <section id='partners' className='section section-partners'>
      <img className='placeholder_2-left' alt={'pb2'} src={placeholder_2} />
      <img className='placeholder_2-right' alt={'pb2'} src={placeholder_2} />
      <Fade bottom>
        <h1 className='section-heading'>Partners</h1>
      </Fade>
      <div className='section-content'>
        {PARTNER_TYPE.map((type) => (
          <div className={`${type}-container partner-container`}>
            <h2 className='heading'>{type.toUpperCase()} SPONSERS</h2>
            {/* {console.log(type)} */}
            <div className='partners-container'>
              {partners
                .filter((partner) => partner.type === type)
                .map((partner) => (
                  // <div
                  //   key={partner.key}
                  //   className='partner-image'
                  //   onClick={() => onClickHandler(partner.route)}
                  // >
                  <a
                    href={partner.website}
                    target='__blank'
                    className='partner-image'
                  >
                    <Fade bottom delay={200}>
                      <img src={partner.image} alt='partner' />
                    </Fade>
                  </a>
                  // </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default withRouter(Partners);
