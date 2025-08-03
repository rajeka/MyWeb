import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      backgroundColor="white"
      borderRadius="md"
      justifyContent="space-between"
      // p="2"
    >
      <Image
        height="200px"
        src={imageSrc}
        w="100%"
        rounded="md"
        aspectratio={4 / 3}
      />
      <Heading as="h4" fontSize="sm" m={3} color="black">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600" m={3} flexGrow={1}>
        {description}
      </Text>
      <span className="more">
        <Link to={url} target="_blank" className="url">
          <span>See more</span>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </span>
    </Box>
  );
};

export default Card;
