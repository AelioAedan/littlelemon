import { Button, Container, HStack, Heading, Spacer } from "@chakra-ui/react";
import Card from "./Card";


function Specials() {
    return(
        <Container maxW={"100vw"} bg={"tomato"}>
            <Container maxW={"container.xl"}>
                <HStack pt={8} pb={8}>
                    <Heading>
                        Specials
                    </Heading>
                    <Spacer></Spacer>
                    <Button>Online Menu</Button>
                </HStack>
                <HStack pt={8}>
                    <Card
                        dishImageSrc={"greek salad.jpg"}
                        dishName={"Greek salad"}
                        dishPrice={"$12.99"}
                        dishDescription={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
                    />
                    <Card
                        dishImageSrc={"greek salad.jpg"}
                    />
                    <Card
                        dishImageSrc={"greek salad.jpg"}
                    />
                </HStack>
            </Container>
        </Container>
    )
}

export default Specials