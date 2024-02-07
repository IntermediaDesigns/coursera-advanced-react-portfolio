import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faFacebook,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com',
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
  const headerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < scrollPosition) {
        headerRef.current.style.transform = 'translateY(0)';
      } else {
        headerRef.current.style.transform = 'translateY(-200px)';
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      backgroundColor='#18181b'
      ref={headerRef}
      transition='transform 0.3s ease-in-out'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav id='social'>
            {/* Add social media links based on the `socials` data */}
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={socials.icon}
                  size='2xl'
                  style={{ color: social.color }}
                />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href='#' onClick={handleClick('projects')}>
                Projects{' '}
              </a>
              <a href='#' onClick={handleClick('contact')}>
                {' '}
                Contact me{' '}
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
