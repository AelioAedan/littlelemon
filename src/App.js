import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    </ChakraProvider>
  );
}

export default App;
