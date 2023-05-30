import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Img,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';



const Links = ['Home', 'Menu', 'About' ];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    href={ '#' + children}
    _hover={{
      textDecoration: 'none',
      bg: 'var(--primary2)',
    }}
    >
    {children}
  </Link>
);

const Links2 = ['Reservations', 'Order Online', 'Login' ];

const NavLink2 = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    href={children}
    _hover={{
      textDecoration: 'none',
      bg: 'var(--primary2)',
    }}
    >
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'var(--highlight)'} px={4} position={"fixed"} w={"100vw"} zIndex={"1"}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Spacer />
            <Box><Img src='Logo.svg' alt='Little Lemon Logo' /></Box>
            <Spacer />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              {Links2.map((link) => (
                <NavLink2 key={link}>{link}</NavLink2>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              {Links2.map((link) => (
                <NavLink2 key={link}>{link}</NavLink2>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}