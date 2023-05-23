import { Container, Flex, HStack, Image, Spacer } from "@chakra-ui/react";


function Nav() {
    return(
        <Container mt={5} mb={5} maxW={"container.xl"}>
            <Flex as="nav" alignItems={"center"}>
                <Image src="Logo.svg" alt="Little Lemon Restaurant Logo"/>
                <Spacer />
                <HStack as="ul" gap={5}>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order online</a></li>
                    <li><a>Login</a></li>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Nav;