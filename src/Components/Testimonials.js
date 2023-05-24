import { StarIcon } from "@chakra-ui/icons";
import { Container, Heading, SimpleGrid, Card, CardHeader, CardBody, Text, CardFooter, Button, Icon, Avatar, HStack, Spacer } from "@chakra-ui/react";


function Testimonials() {
    return(
        <Container maxW={"100vw"} bg={"var(--primary)"} minH={660}>
            <Container maxW={"container.xl"} pt={5} pb={12}>
                <Heading textAlign={"center"} pt={16} pb={8} color={"var(--highlight)"} fontFamily={"Markazi Text, serif"} fontSize={"3em"} letterSpacing={1.2}>
                    Testimonials
                </Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <StarIcon />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                <Avatar src="Avatar 1.jpeg" size={"xl"} borderRadius={4}/>
                                <Text pl={4} fontWeight={"bold"}>Jana</Text>
                            </HStack>
                        </CardBody>
                        <CardFooter>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <StarIcon />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                <Avatar src="Avatar 2.jpeg" size={"xl"} borderRadius={4}/>
                                <Text pl={4} fontWeight={"bold"}>Tom</Text>
                            </HStack>
                        </CardBody>
                        <CardFooter>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <StarIcon />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                <Avatar src="Avatar 3.jpeg" size={"xl"} borderRadius={4}/>
                                <Text pl={4} fontWeight={"bold"}>Peter</Text>
                            </HStack>
                        </CardBody>
                        <CardFooter>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <StarIcon />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                            <StarIcon ml={1} />
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                <Avatar src="Avatar 4.jpeg" size={"xl"} borderRadius={4}/>
                                <Text pl={4} fontWeight={"bold"}>Hans</Text>
                            </HStack>
                        </CardBody>
                        <CardFooter>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
                        </CardFooter>
                    </Card>
                    </SimpleGrid>
            </Container>
        </Container>
    )
}

export default Testimonials;