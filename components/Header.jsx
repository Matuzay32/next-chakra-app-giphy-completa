import Link from "next/link";
import {
  Input,
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import GifContext from "./../context/GifContext";
import { useContext } from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    search,
    setSearch,
    onChangeInputSearch,
    onClickSearch,
    onClickSearchClean,
  } = useContext(GifContext);
  //Usado para abrir cerrar el menu
  console.log("holaaaa desde el header");

  return (
    <>
      <Box
        borderWidth={"1px"}
        display={"flex"}
        bg={useColorModeValue("white", "gray.900")}
        px={4}>
        <Flex h={16} alignItems={"flex-end"} justifyContent={"space-between"}>
          <IconButton
            bg={"white"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={6} alignItems={"center"} justifyContent={"center"}>
            {isOpen ? null : (
              <Box
                // w="200px"
                ml={6}
                display={"flex"}
                justifyContent={"center"}>
                Logo
              </Box>
            )}

            <HStack
              // as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}></HStack>

            <HStack
              display={{ base: "none", md: "flex" }}
              px={2}
              py={2}
              spacing={2}>
              <Link href={"/"}>
                <Button
                  _hover={{ bg: "200", color: "white" }}
                  variant={"outline"}>
                  Home
                </Button>
              </Link>

              <Link href={"/favorites"}>
                <Button
                  _hover={{ bg: "200", color: "white" }}
                  variant={"outline"}>
                  Favorites
                </Button>
              </Link>

              <Link href={"/about"}>
                <Button
                  _hover={{ bg: "200", color: "white" }}
                  variant={"outline"}>
                  About as
                </Button>
              </Link>

              <Input
                onChange={(e) => onChangeInputSearch(e)}
                placeholder="Search"
                value={search}
              />
              <IconButton
                _hover={{ color: "white" }}
                bg="200"
                icon={<CloseIcon />}
                onClick={onClickSearchClean}
              />
              <IconButton
                _hover={{ color: "white" }}
                bg="200"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={(e) => onClickSearch(e)}
              />
            </HStack>

            {isOpen && (
              <HStack px={2} py={2} spacing={2}>
                <Input
                  display={{ base: "flex", md: "none" }}
                  onChange={(e) => onChangeInputSearch(e)}
                  placeholder="Search"
                  value={search}
                />
                <IconButton
                  size="xs"
                  display={{ base: "flex", md: "none" }}
                  _hover={{ color: "white" }}
                  bg="200"
                  icon={<CloseIcon />}
                  onClick={() => onClickSearchClean()}
                />

                <IconButton
                  size="xs"
                  display={{ base: "flex", md: "none" }}
                  _hover={{ color: "white" }}
                  bg="200"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  onClick={(e) => onClickSearch(e)}
                />
              </HStack>
            )}
          </HStack>
        </Flex>

        {isOpen && (
          <Box
            justifyContent={{ base: "center" }}
            display={{ base: "flex", md: "none" }}>
            <Stack spacing={2} p={1}>
              <Link href={"/"}>
                <Button
                  size="xs"
                  _hover={{ bg: "200", color: "white" }}
                  variant={"outline"}>
                  Home
                </Button>
              </Link>
              <Link href={"/favorites"}>
                <Button
                  size="xs"
                  _hover={{ bg: "200", color: "white" }}
                  variant={"outline"}>
                  Favorites
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button
                  _hover={{ bg: "200", color: "white" }}
                  size="xs"
                  variant={"outline"}>
                  About as
                </Button>
              </Link>
              <Button
                _hover={{ bg: "200", color: "white" }}
                size="xs"
                bg={"200"}
                mr="4">
                Sign Up
              </Button>
              <Button
                _hover={{ bg: "200", color: "white" }}
                size={"xs"}
                bg={"200"}>
                Log in
              </Button>
            </Stack>
          </Box>
        )}

        <Box
          width={"50%"}
          display={{ base: "none", md: "flex" }}
          justifyContent={"flex-end"}
          alignItems={"center"}>
          <Link href={"/singin"}>
            <Button
              mr={2}
              bg={"200"}
              _hover={{ bg: "200", color: "white" }}
              variant={"outline"}>
              Sing In
            </Button>
          </Link>
          <Link href={"/login"}>
            <Button
              bg={"200"}
              _hover={{ bg: "200", color: "white" }}
              variant={"outline"}>
              Log In
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
