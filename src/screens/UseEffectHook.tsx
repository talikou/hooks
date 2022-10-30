import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Center,
  HStack,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import Block from "../components/Block";

export default function useEffectHook() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { isOpen, onToggle } = useDisclosure();

  const mouseMoveHandler = (event: any) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  function showAndHideResource(type: any) {
    onToggle();
    setType(type);
  }

  function CollapseBox(type: String) {
    return (
      <Box
        p="1rem"
        color="white"
        mt="1rem"
        bg="teal.500"
        rounded="md"
        shadow="md"
      >
        {JSON.stringify(data, null, 2)}
      </Box>
    );
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <Box mb="3rem">
      <Center fontSize="2rem" mb="1rem">
        UseEffect Hook
      </Center>
      <Box>
        <Flex wrap="wrap" justifyContent="space-between">
          <Block>
            <Text fontSize="2rem">Resource: {type}</Text>
            <HStack>
              <Button
                bgColor="green.600"
                onClick={() => showAndHideResource("users")}
              >
                Users
              </Button>
              <Button
                bgColor="teal.600"
                onClick={() => showAndHideResource("todos")}
              >
                Todos
              </Button>
            </HStack>
          </Block>
          <Block>
            <Text fontSize="2rem">Mouse Location:</Text>
            <HStack alignItems="center">
              <Box
                bgColor="blue.600"
                p={2}
                borderRadius="0.4rem"
                fontWeight="600"
              >
                X: {pos.x}
              </Box>
              <Box
                bgColor="blue.600"
                p={2}
                borderRadius="0.4rem"
                fontWeight="600"
              >
                Y: {pos.y}
              </Box>
            </HStack>
          </Block>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          {CollapseBox("users")}
        </Collapse>
      </Box>
    </Box>
  );
}
