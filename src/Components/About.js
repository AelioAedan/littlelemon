import { Container, HStack, Heading, Image, Text, VStack, Spacer, Box, Flex, Show, Hide } from "@chakra-ui/react";

function About() {
    return(
        <Container maxW={'100vw'} bg={"var(--secondary)"} py={5}>
            <Container maxW={"container.xl"} pt={"5"} pb={"5"} minH={420}>
                <HStack>
                    <VStack maxW={"50ch"} alignItems={"flex-start"} justifyContent={"center"} pt={10}>
                        <Heading as={"header"} fontFamily={'Markazi Text, serif'} fontSize={"5em"} color={"var(--primary)"}>
                            Little Lemon
                        </Heading>
                        <Heading fontFamily={'Markazi Text, serif'} color={"var(--highlight2)"}>
                            Chicago
                        </Heading>
                        <Text color={"var(--highlight2)"} pt={8} pb={8}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </Text>
                    </VStack>
                    <Hide below="lg">
                    <Image overflow={"hidden"} src="restaurant.jpg" fit={"cover"} borderRadius={"16px"} alt="Fresh baguettes getting served" />
                    </Hide>
                </HStack>
                <Show below="lg">
                <Image overflow={"hidden"} src="restaurant.jpg" fit={"cover"} borderRadius={"16px"} alt="Fresh baguettes getting served" />
                </Show>
            </Container>
        </Container>
    )
};

export default About;