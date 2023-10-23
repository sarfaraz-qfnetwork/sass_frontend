/* eslint-disable react/prop-types */
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
} from "@chakra-ui/react";
import { ImWordpress } from "react-icons/im";
import { FaShopify } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign={"center"}>
        {title}
      </Text>
      <Text color={"gray.600"} textAlign={"center"}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Index() {
  return (
    <Box bg={"blackAlpha.900"} py={12}>
      <Container maxW={"5xl"} textColor={"white"}>
        <Heading fas="h1" fontSize="4xl" textAlign={"center"} py={5}>
          Integrations
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={5}>
          <Feature
            icon={<Icon color={"primary.500"} as={ImWordpress} w={10} h={10} />}
            title={"Wordpress"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />

          <Feature
            icon={<Icon color={"primary.500"} as={FaShopify} w={10} h={10} />}
            title={"Shopify"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
