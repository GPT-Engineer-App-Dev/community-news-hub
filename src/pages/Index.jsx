import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Welcome to Our News Site</Heading>
        <Text mt={4}>Get the latest updates on what matters to you.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Featured Articles</Heading>
        <Text mt={4}>Here are some of the most recent news articles.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Navigation</Heading>
        <Link as={RouterLink} to="/local-news">Local News</Link>
        <Link as={RouterLink} to="/sports">Sports</Link>
        <Link as={RouterLink} to="/culture">Culture</Link>
      </Box>
    </VStack>
  );
};

export default Index;