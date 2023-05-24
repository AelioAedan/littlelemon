import { Box, Button, Container, Flex, HStack, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import Card from "./Card";


function Specials() {
    return(
        <Container maxW={"100vw"} bg={"tomato"}minH={660}>
            <Container maxW={"container.xl"} pt={5} pb={12}>
                <HStack pt={16} pb={8}>
                    <Heading>
                        Specials
                    </Heading>
                    <Spacer></Spacer>
                    <Button size={"lg"} bg={"var(--primary2)"} color={"var(--higlight2)"}
                            _hover={{
                                background: "var(--secondary2)",
                            }}
                        >
                            Online Menu
                        </Button>
                </HStack>
                <SimpleGrid columns={3} spacing={10}>
                    <Card
                        dishImageSrc={"greek salad-img.jpg"}
                        dishName={"Greek salad"}
                        dishPrice={"$12.99"}
                        dishDescription={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
                    />
                    <Card
                        dishImageSrc={"bruchetta-img.jpg"}
                        dishName={"Bruchetta"}
                        dishPrice={"$5.99"}
                        dishDescription={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}
                    />
                    <Card
                        dishImageSrc={"lemon dessert-img.jpg"}
                        dishName={"Lemon Dessert"}
                        dishPrice={"$5.00"}
                        dishDescription={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    />
                    </SimpleGrid>
            </Container>
        </Container>
    )
}

export default Specials