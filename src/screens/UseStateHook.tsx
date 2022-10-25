// hook
import { useState } from "react";

// UI
import { Box, Text, Button, Flex } from "@chakra-ui/react";

// components
import Block from "../components/Block";

export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: "Новое значение",
      };
    });
  };

  return (
    <>
      <Flex as={Text} fontSize="2rem" justifyContent="center" mb="1rem">
        UseState Hook
      </Flex>
      <Flex justifyContent="space-evenly">
        <Block>
          <Text fontSize="2rem">Counter: {counter}</Text>
          <Button onClick={increment} mr="1rem" bgColor="blue.400">
            +
          </Button>
          <Button onClick={decrement} bgColor="blue.400">
            -
          </Button>
        </Block>
        <Block>
          <pre>{JSON.stringify(state, null, 2)}</pre>
          <Button onClick={updateTitle}>Изменить название</Button>
        </Block>
      </Flex>
    </>
  );
}
