import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import UseStateHook from "./screens/UseStateHook";
import UseEffectHook from "./screens/UseEffectHook";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Box p={3} w="44rem" m="auto">
        <UseStateHook />
        <UseEffectHook />
      </Box>
    </Box>
  </ChakraProvider>
);
