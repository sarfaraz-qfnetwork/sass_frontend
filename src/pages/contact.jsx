import Layout from "../layout/base";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function contact() {
  return (
    <>
      <Layout>
        <Container
          bg="white"
          maxW="full"
          mt={0}
          centerContent
          overflow="hidden"
        >
          <Flex>
            <Box
              color="white"
              borderRadius="lg"
              m={{ base: 2, md: 16, lg: 10 }}
            >
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading color="primary.600">Contact</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="primary.600">
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="primary.600"
                            leftIcon={<MdPhone size="20px" />}
                          >
                            +91-988888888
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="primary.600"
                            leftIcon={<MdEmail size="20px" />}
                          >
                            hello@abc.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="primary.600"
                            leftIcon={<MdLocationOn size="20px" />}
                          >
                            Karnavati, India
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      >
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          color="gray.600"
                          isRound={true}
                          _hover={{ bg: "#0862F6", color: "white" }}
                          icon={<MdFacebook size="28px" />}
                        />
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          color="gray.600"
                          isRound={true}
                          _hover={{ bg: "#000000", color: "white" }}
                          icon={<BsGithub size="28px" />}
                        />
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          color="gray.600"
                          isRound={true}
                          _hover={{ bg: "#7289DA", color: "white" }}
                          icon={<BsDiscord size="28px" />}
                        />
                      </HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="primary.100" borderRadius="lg">
                      <Box m={8} color="gray.600">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                _hover={{ borderColor: "red" }}
                              >
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                border="none"
                                bg="white"
                                size="md"
                                placeholder="John doe"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                border="none"
                                bg="white"
                                size="md"
                                placeholder="johndoe@gmail.com"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              border="none"
                              bg="white"
                              placeholder="message"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              variant="solid"
                              bg="primary.500"
                              color="white"
                              _hover={{ bg: "primary.600" }}
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Layout>
    </>
  );
}
