import { Container, Stack, Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

export default function Contenedor({ children }) {
  return (
    <Box>
      <Container
        centerContent
        maxW={{ base: "container.sm", md: "container.xl" }}>
        {/* todo los hijos seria todo lo que va ir a debajo de del header */}
        {children}
      </Container>
    </Box>
  );
}
