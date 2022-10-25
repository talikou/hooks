import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import UseStateHook from "./screens/UseStateHook";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Box p={3} w="50rem" m="auto">
        <UseStateHook />
      </Box>
    </Box>
  </ChakraProvider>
);
