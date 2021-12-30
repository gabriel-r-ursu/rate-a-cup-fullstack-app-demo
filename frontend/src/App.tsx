import $App from "./styles/App";
import GlobalStyles from "./styles/GlobalStyles";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <$App>
      <GlobalStyles />
      <Logo />
      <Navbar />
      <Cards />
    </$App>
  );
}

export default App;
