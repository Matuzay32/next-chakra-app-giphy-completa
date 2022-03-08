import { Box, Stack, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";
import React, { useContext } from "react";
import Contenedor from "./../components/Contenedor";
import Card from "./../components/Card";
import GifContext from "./../context/GifContext";
import GifProvider from "../Providers/GifProvider";
import Header from "../components/Header";

export default function Home() {
  return (
    <GifProvider>
      <Header></Header>
      <Contenedor>
        <Card></Card>
      </Contenedor>
    </GifProvider>
  );
}
