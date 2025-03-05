import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          color="blue.500"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <AiOutlinePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon size={20} /> : <IoSunny size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
