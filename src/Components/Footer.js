import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'bold'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"var(--highlight)"}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src='Logo.svg' alt='Little Lemon Logo' />
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Little Lemon. By Jonas.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Navgiation</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Menu</Link>
            <Link href={'#'}>Reservations</Link>
            <Link href={'#'}>Order Online</Link>
            <Link href={'#'}>Login</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Link href={'#'}>Address</Link>
            <Link href={'#'}>Phone Number</Link>
            <Link href={'#'}>Email</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}