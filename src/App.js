import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </>
  );
};

export default App;
