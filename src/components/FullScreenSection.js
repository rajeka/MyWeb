import * as React from 'react';
import { VStack } from '@chakra-ui/react';

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? 'white' : 'black'}
      id={boxProps.id}
    >
      <VStack maxWidth="1280px" minHeight="95vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
