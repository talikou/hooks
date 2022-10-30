import { Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const date = new Date().toDateString();
  const [state, setState] = useState(date);

  return (
    <Flex
      fontSize="1.5rem"
      alignItems="center"
      w="100%"
      h="4rem"
      pl=".5rem"
      bgColor="blue.900"
    >
      {state}
    </Flex>
  );
}
