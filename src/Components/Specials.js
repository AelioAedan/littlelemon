import { Button, Container, HStack, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import Card from "./Card";


function Specials() {
    return(
        <Container maxW={"100vw"} bg={"var(--secondary)"} minH={660} id="menu">
            <Container maxW={"container.xl"} pt={5} pb={12}>
                <HStack pt={16} pb={8}>
                    <Heading fontFamily={"Markazi-Text, serif"} fontSize={"3em"} color={"var(--primary)"}>
                        This weeks specials!
                    </Heading>
                    <Spacer></Spacer>
                    <Button bg={"var(--primary2)"} color={"var(--higlight2)"}
                            _hover={{
                                background: "var(--secondary2)",
                            }}
                        >
                            Menu
                        </Button>
                </HStack>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                    <Card
                        dishImageSrc={"greek salad-img.jpg"}
                        dishName={"Greek Salad"}
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