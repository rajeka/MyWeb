import React from 'react';

import { Link, Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import './LandingSection.css';
const greeting = 'Hello, I am Ranjan Ekanayake!';
const bio1 = 'A Fullstack Engineer';
const bio2 =
  'I am a seasoned Full Stack Software Engineer with over 10 years of experience.\n \
    I have deep expertise in building responsive, secure fullstack web applications using modern JavaScript frameworks such as React and Angular, along with backend development in Python and Java.\n \
     I’ve worked extensively with both relational databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Cassandra).\n \
    My background combines full-stack development, a strong front-end focus, and a proven ability to deliver scalable, secure solutions. These strengths make me a strong fit for any fullstack position.';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <section className="avatar-intro">
      <img src="/myself.jpeg" alt="Your Avatar" className="avatar" />
      <p className="greeting">{greeting}</p>
    </section>

    <section className="bio">
      <div className="me">{bio1}</div>
      <div className="bio-more">{bio2}</div>
      <p className="myself">
        <Link variant="plain" href="../images/my_profile.pdf" target="_blank">
          My Resume
        </Link>
      </p>
    </section>
  </FullScreenSection>
);

export default LandingSection;
