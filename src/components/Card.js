import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  

  return (
    <VStack
      align="flex-start"
      spacing={4}
      p={4}
      borderRadius={8}
      boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
      backgroundColor="white"
    >
      <Image src={imageSrc} alt={title} borderRadius={8} />
      <Heading as="h2" size="md" color="gray.800">
        {title}
      </Heading>
      <Text color="gray.500">{description}</Text>
      <HStack>
        <Text color="gray.800">Read more</Text>
        <FontAwesomeIcon icon={faArrowRight} style={{color: "#000",}}  />
      </HStack>
    </VStack>
  );
};

export default Card;
