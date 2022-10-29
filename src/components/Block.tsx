import { Box } from "@chakra-ui/react";

export default function Block({ children }: any) {
  return (
    <Box borderRadius="10px" bgColor="gray.700" w="20rem" p=".5rem">
      {children}
    </Box>
  );
}
