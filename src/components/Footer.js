import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Footer = () => {
  const footer = {
    textAlign: 'center',
    color: '#7e7d7d',
    fontSize: '0.8rem',
    // height: '50px',
  };
  return (
    <Box backgroundColor="black" h="25px">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={10}
        >
          <p style={footer}>
            &copy; {new Date().getFullYear()} My Profile. All rights reserved.
          </p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
