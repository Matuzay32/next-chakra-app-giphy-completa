import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { useContext } from "react";
import GifContext from "../context/GifContext";

export default function Card() {
  const { setGifs, gifs } = useContext(GifContext);

  return (
    <Wrap spacing={6}>
      {gifs?.map((gif) => (
        <Center key={gif.id}>
          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}>
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${gif.imageUrl})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}>
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={gif.imageUrl}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.400"}
                  fontSize={"xl"}
                  textTransform={"uppercase"}>
                  gif
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  {gif.title}
                </Heading>
                <Box direction={"row"} align={"center"} p={6}>
                  <Text color={"gray.600"}>{`${gif.time}`}</Text>
                  {gif.user && (
                    <>
                      <Text
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        color={"gray.900"}>
                        User
                      </Text>
                      <Text
                        fontWeight={"bold"}
                        textTransform={"capitalize"}
                        color={"gray.600"}>{`${gif.user}`}</Text>
                    </>
                  )}
                </Box>
              </Stack>
            </Box>
          </Center>
        </Center>
      ))}
    </Wrap>
  );
}
