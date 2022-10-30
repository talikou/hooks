import React, { useEffect, useState, useRef } from "react";
import { Text, Input, Button, Flex, Center } from "@chakra-ui/react";
import Block from "../components/Block";

export default function UseRefHook() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current?.focus();

  return (
    <>
      <Center as={Text} fontSize="2rem" justifyContent="center">
        UseRef Hook
      </Center>

      <Flex justifyContent="space-between">
        <Block>
          <Input
            ref={inputRef}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button mt=".5rem" onClick={focus}>
            Focus
          </Button>
        </Block>

        <Block>
          <Text fontSize="1.5rem">
            Count of renders: {renderCount.current} <br />
            Last state: {prevValue.current}
          </Text>
        </Block>
      </Flex>
    </>
  );
}
