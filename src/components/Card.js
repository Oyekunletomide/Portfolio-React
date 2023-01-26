import { Heading, HStack, Image, Text, VStack, Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, TechnologiesUsed, Live, Repo}) => {
   return (
     <VStack
       color="black"
       backgroundColor="white"
       cursor="pointer"
       borderRadius="xl"
     >
       <Image borderRadius="xl" src={imageSrc} alt={title} h={400} w={600} />
       <VStack spacing={4} p={4} alignItems="flex-start">
         <HStack justifyContent="space-between" alignItems="center">
           <Heading as="h3" size="md">
             {title}
           </Heading>
         </HStack>
         <Text color="#64748b" fontSize="lg">
           {description}
         </Text>
         {/* <HStack spacing={2} alignItems="center">
           <p>See more</p>
           <FontAwesomeIcon icon={faArrowRight} size="1x" />
         </HStack> */}
         <Heading as="h4" size="sd">
             TechnologiesUsed: {TechnologiesUsed}
           </Heading>
           <Box display="flex">
            <Box>
              <a href={Live}>Visit Site <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
            </Box>
            <Box marginLeft={10}>
              <a href={Repo}>Repo</a>
            </Box>
           </Box>
       </VStack>
     </VStack>
   );
};

export default Card;