import React from 'react';

//const Rs = () => <span className='rupee-symbol'>₹</span>;

export const eventsList = [
  {
    code: 'hack-1',
    name: 'Sci-Pher Hunt'
  },
  {
    code: 'hack-2',
      name: 'Mental Health Talks'
  },
  {
    code: 'hack-3',
      name: 'Covid-Relief'
  }
];

export const events = {
  hackTheCrisis: [
    {
      code: 'hack-1',
      name: 'Sci-Pher Hunt',
      date: '20th May, 2021',
      team: '2-4 Members',
      //  prize: <>{Rs()} Please change this</>,
      registrationFee : 'FREE',
     
      registrationLink:
        'https://forms.gle/HXwBHKYTyMDiiPVS7',
      poster: require('../assets/events/ScipherHunt-left.png'),
      description: (
        <p>
         In a test of your sharpness, this quirky yet interesting challenge will test your awareness and get you to think on your feet. You will go through a series of decoding and answering questions at different levels, before moving on to the next stage. You don’t need any prior subject knowledge for this event, just make sure you brush up on those problem solving skills! So buckle up for this brain tickling rollercoaster ride.

        </p>
      )
    },
    {
      code: 'hack-2',
      name: 'Mental Health Talks',
      date: '26th May, 2019',
      team: '1 member',
      //prize: <>{Rs()} Please change this</>,
      registrationFee : 'FREE',

      registrationLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSflsZYw3nu1SyOMAPGnezoD3wy2mPUMhyESiLSNxoZAwnFJzQ/viewform?usp=sf_link',
      poster: require('../assets/events/Mental Health Talks-mid.png'),
      description: (
        <p>
          Quarantine, in particular, and its impact on many people&#39;s normal activities, habits, or livelihood
are forcing them into a bleak world of isolation, depression, unhealthy alcohol and drug use, and
learning to cope with the stress and anxiety it has caused; ISTE is hosting a discussion on
mental health under the direction of Dr. anonymous on this subject in order to help you become
mentally fit and healthy, allowing you to handle emotionally stressful circumstances with ease.
        </p>
      )
    },
    {
      code: 'hack-3',
      name: 'Covid-Relief',
      date: 'On Going!',
      team: '1 member',
      //prize: <>{Rs()} Please change this</>,
      registrationFee : 'FREE',
      
      registrationLink:
        'https://twitter.com/istecovidrelief',
      poster: require('../assets/events/covid.png'),
      description: (
        <p>
          As the second wave of COVID-19 continues to scourge our country, hospitals across India are facing a dire shortage of beds and oxygen cylinders. The safety of people across the country and abroad is a matter of great priority. As young budding engineers and citizens of the country, we have a strong urge to help those in need to our fullest potential. Collaborating with various ISTE chapters throughout the country, we have started a Covid Relief drive to help people in need with the help of social media platforms. We humbly request you to donate, and your little bit for the country.
        </p>
      )
    }
  
  ]
};
