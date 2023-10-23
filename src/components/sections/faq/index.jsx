import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

export default function Index() {
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>FAQ</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Learn more about logoipsum Mind. Read our FAQ for answers.
        </Text>
      </Stack>
      <Grid templateColumns={{sm:'1fr', md:'repeat(2,1fr)'}} gap={6} py={5}>
        
        <GridItem>
          <Accordion allowMultiple>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>What is logoipsum?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>What platforms does logoipsum integrate with?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>For Agencies: How can I manage multiple clients and their accounts?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>Who does logoipsum share my data with?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          </Accordion>
        </GridItem>
      
        <GridItem>
          <Accordion allowMultiple>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>Is payment secure?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>Do you have an affiliate and referral program?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontWeight={'medium'}>I have more questions. How can I get in touch?</Text>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon color={'primary.600'} fontSize="12px" />
                      ) : (
                        <AddIcon color={'primary.600'} fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          </Accordion>
        </GridItem>
        
      </Grid>
    </Container>
  );
}
