import { Button, Container, HStack, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react";


function Header() {
    return(
        <Container maxW={'100vw'} bg={"var(--primary)"}>
            <Container maxW={"container.xl"} pt={"5"} pb={"5"} minH={420}>
                <HStack>
                    <VStack maxW={"60ch"} alignItems={"flex-start"} justifyContent={"center"} pt={10}>
                        <Heading as={"header"} fontFamily={'Markazi Text, serif'} fontSize={80} color={"var(--primary2)"}>
                            Little Lemon
                        </Heading>
                        <Heading fontFamily={'Karla, serif'} fontSize={32} color={"var(--highlight)"}>
                            Chicago
                        </Heading>
                        <Text color={"var(--highlight)"} pt={8} pb={8} fontSize={18}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Button size={"lg"} bg={"var(--primary2)"} color={"var(--higlight2)"}>
                            Reserve a Table
                        </Button>
                    </VStack>
                    <Spacer />
                    <Image src="restauranfood.jpg" w={"375px"} h={"325px"} fit={"cover"} borderRadius={"16px"} alt="Fresh baguettes getting served" />
                </HStack>
            </Container>
        </Container>
    )
}

export default Header;