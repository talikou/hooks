// hook
import { useState } from "react";

// UI
import { Text, Button, Flex, Center, HStack, Box } from "@chakra-ui/react";

// components
import Block from "../components/Block";

export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState("Counter");

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const updateTitle = () => setState((prev) => (prev = "New value"));

  return (
    <Box mb="3rem">
      <Center fontSize="2rem" mb="1rem">
        UseState Hook
      </Center>
      <Flex justifyContent="space-between">
        <Block>
          <Text fontSize="1.5rem">Counter: {counter}</Text>
          <HStack>
            <Button onClick={increment} bgColor="blue.600">
              +
            </Button>
            <Button onClick={decrement} bgColor="blue.600">
              -
            </Button>
          </HStack>
        </Block>
        <Block>
          <Text fontSize="1.5rem">Title: {state}</Text>
          <Button bgColor="purple.600" onClick={updateTitle}>
            Change name
          </Button>
        </Block>
      </Flex>
    </Box>
  );
}
