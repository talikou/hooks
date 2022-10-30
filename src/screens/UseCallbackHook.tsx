import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Block from "../components/Block";
import ItemsList from "../components/ItemsList";

export default function UseCallbackHook() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styled = {
    color: colored ? "darkred" : "white",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <Box mb="3rem">
      <Center fontSize="2rem" mb="1rem">
        UseCallback Hook
      </Center>
      <Center>
        <Block>
          <Text fontSize="1.5rem" style={styled}>
            Number of elements: {count}
          </Text>
          <HStack>
            <Button
              bgColor="green.600"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Add
            </Button>
            <Button
              bgColor="blue.600"
              onClick={() => setColored((prev) => !prev)}
            >
              Change
            </Button>
          </HStack>
          <Accordion allowToggle mt=".5rem">
            <AccordionItem>
              <AccordionButton>
                <Box flex={1} textAlign="left">
                  Section of elements
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb="1rem">
                <ItemsList getItems={generateItemsFromAPI} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Block>
      </Center>
    </Box>
  );
}
