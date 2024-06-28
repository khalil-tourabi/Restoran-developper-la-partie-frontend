import React from "react";
import { SimpleGrid, Box, Heading, Text, Button } from "@chakra-ui/react";

const LatestArticles = () => (
  <>
    <Heading textAlign="center" margin={7}>
      Dernier Articles
    </Heading>{" "}
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <Box>
        <center>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">Customer dashboard</Heading>
            <Text mt={2}>
              View a summary of all your customers over the last month.
            </Text>
            <Button mt={4} colorScheme="blue">
              View here
            </Button>
          </Box>
        </center>
      </Box>
      <Box>
        <center>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">Customer dashboard</Heading>
            <Text mt={2}>
              View a summary of all your customers over the last month.
            </Text>
            <Button mt={4} colorScheme="blue">
              View here
            </Button>
          </Box>
        </center>
      </Box>
      <Box>
        <center>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">Customer dashboard</Heading>
            <Text mt={2}>
              View a summary of all your customers over the last month.
            </Text>
            <Button mt={4} colorScheme="blue">
              View here
            </Button>
          </Box>
        </center>
      </Box>
    </SimpleGrid>
  </>
);

export default LatestArticles;
