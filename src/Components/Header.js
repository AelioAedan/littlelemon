import { Box, Button, Container, HStack, Heading, Hide, Image, Show, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Header() {
    return(
        <Container maxW={'100vw'} bg={"var(--primary)"} pt={"50"} id="home">
            <Container maxW={"container.xl"} pt={"50"} pb={"50"} minH={420}>
                <HStack>
                    <VStack maxW={"50ch"} alignItems={"flex-start"} justifyContent={"center"} pt={10}>
                        <Heading as={"header"} fontFamily={'Markazi Text, serif'} fontSize={"5em"} color={"var(--primary2)"}>
                            Little Lemon
                        </Heading>
                        <Heading fontFamily={'Markazi Text, serif'} color={"var(--highlight)"}>
                            Chicago
                        </Heading>
                        <Text color={"var(--highlight)"} pt={8} pb={8}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Show below="lg">
                            <Box pb={8}>
                                <Image src="restauranfood.jpg" fit={"cover"} borderRadius={"16px"} alt="Fresh baguettes getting served" />
                            </Box>
                        </Show>
                        <Button size={"lg"} bg={"var(--primary2)"} color={"var(--higlight2)"}
                            _hover={{
                                background: "var(--secondary2)",
                            }}
                        >
                            <Link to={'/reservations'}> Reserve a Table </Link>
                        </Button>
                    </VStack>
                    <Spacer />
                    <Hide below="lg">
                    <Image src="restauranfood.jpg" w={"375px"} h={"325px"} fit={"cover"} borderRadius={"16px"} alt="Fresh baguettes getting served" />
                    </Hide>
                </HStack>
            </Container>
        </Container>
    )
}

export default Header;