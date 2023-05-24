import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
