import { ChakraProvider } from "@chakra-ui/react";
import GifProvider from "../Providers/GifProvider";
import theme from "../theme ";

function MyApp({ Component, pageProps }) {
  return (
    <GifProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GifProvider>
  );
}
export default MyApp;
