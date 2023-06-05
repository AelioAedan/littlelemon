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
import { Link as ReactRouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


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
              <Link
                as={HashLink}
                to='/#home'
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'var(--primary2)',
                }}
              >
                Home
              </Link>
              <Link
                as={ReactRouterLink}
                to='/reservations'
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'var(--primary2)',
                }}
              >
                Reservations
              </Link>
              <Link
                as={HashLink}
                to='/#menu'
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'var(--primary2)',
                }}
              >
                Specials
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link
                as={ReactRouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'var(--primary2)',
                }}
              >
                Home
              </Link>
              <Link
                as={ReactRouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'var(--primary2)',
                }}
              >
                Home
              </Link>
              <Link
                as={ReactRouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'var(--primary2)',
                }}
              >
                Home
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}