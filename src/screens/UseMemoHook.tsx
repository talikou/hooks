import { useState, useMemo, useEffect } from "react";
import { Text, Button, Box, HStack, Center } from "@chakra-ui/react";
import Block from "../components/Block";

function complexCompute(num: number) {
  console.log("Complex compute");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

export default function UseMemoHook() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styled = useMemo(
    () => ({
      color: colored ? "darkred" : "white",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styled]);

  return (
    <Box mb="3rem">
      <Center fontSize="2rem" mb="1rem">
        UseMemo Hook
      </Center>
      <Center>
        <Block>
          <Text fontSize="2rem" style={styled}>
            Compute prop: {computed}
          </Text>
          <HStack>
            <Button
              bgColor="green.600"
              onClick={() => setNumber((prev) => prev + 1)}
            >
              Add
            </Button>
            <Button
              bgColor="red.600"
              onClick={() => setNumber((prev) => prev - 1)}
            >
              Remove
            </Button>
            <Button
              bgColor="blue.600"
              onClick={() => setColored((prev) => !prev)}
            >
              Change
            </Button>
          </HStack>
        </Block>
      </Center>
    </Box>
  );
}
