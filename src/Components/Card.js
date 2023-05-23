import { Card, CardHeader, CardBody, CardFooter, Image, Badge, Text, HStack, Spacer } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';


const dishCard = ({ dishImageSrc, dishName, dishPrice, dishDescription }) => {
    return(
        <Card>
            <CardHeader p={0}>
                <Image src={dishImageSrc} alt={dishName} borderTopRadius={16} pb={5} />
                <HStack>
                    <Text>{dishName}</Text>
                    <Spacer />
                    <Badge>{dishPrice}</Badge>
                </HStack>
            </CardHeader>
            <CardBody>
                <Text>{dishDescription}</Text>
            </CardBody>
            <CardFooter>
                <Text>Order a delivery</Text>
                <ArrowRightIcon />
            </CardFooter>
        </Card>
    )
}

export default dishCard;