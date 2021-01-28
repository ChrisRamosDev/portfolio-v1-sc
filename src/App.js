import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body/Body";
import { ThemeProvider } from "styled-components";

const theme = {
  bg: {
    primary: "linear-gradient(45deg, #222, #111, #000)",
    secondary: "#222",
    footer: "#111",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
