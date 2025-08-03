import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';
import useScrollHeader from '../hooks/useScrollHeader';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';
const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: rpekanayake@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/rajeka',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/rpekanayake',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const scrollDirection = useScrollHeader();
  const tf = scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)';

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={tf}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={4}
          py={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className="logo">
            <NavLink to="/">
              <img
                src="/logo.png"
                alt="Home logo"
                className="logo-img"
                title="AcademiFlow.com"
              />
            </NavLink>
            <ul className="nav-links">
              {
                /* Add social media links based on the `socials` data */
                socials.map((l, index) => (
                  <li key={index}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={l.icon} size="lg" />
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>

          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <ul className="nav-links">
                <li>
                  <Link to="/projects">Projects</Link>
                  {/* <a href="/#projects-section" onClick={handleClick}>
                    Projects
                  </a> */}
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                  {/* <a href="/#contact-me" onClick={handleClick}>
                    Contact Me
                  </a> */}
                </li>
              </ul>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
