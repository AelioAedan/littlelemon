import { Card, CardHeader, CardBody, CardFooter, Image, Badge, Text, HStack, Spacer } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';


const dishCard = ({ dishImageSrc, dishName, dishPrice, dishDescription }) => {
    return(
        <Card bg={"var(--highlight)"}>
            <CardHeader p={0}>
                <Image src={dishImageSrc} alt={dishName} borderTopRadius={16} pb={5} fit={"cover"} />
                <HStack pl={5} pr={5}>
                    <Text fontSize={32} fontFamily={'Markazi Text, serif'}>{dishName}</Text>
                    <Spacer />
                    <Badge fontSize={18} bg={"var(--primary2)"}>{dishPrice}</Badge>
                </HStack>
            </CardHeader>
            <CardBody>
                <Text>{dishDescription}</Text>
            </CardBody>
            <CardFooter alignItems={"center"}>
                <Text fontFamily={'Markazi Text, serif'} fontSize={24}>Order a delivery</Text>
                <ArrowRightIcon ml={5} />
            </CardFooter>
        </Card>
    )
}

export default dishCard;