import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specials from './Components/Specials';
import About from './Components/About';
import BookingPage from './Components/BookingPage';

function App() {
  return (
    <Router>
      <ChakraProvider>
      <Routes>
        <Route exact path='' element={<Nav />} />
        <Route exact path='#header' element={<Header />} />
        <Route exact path='#specials' element={<Specials />} />
        <Route exact path='/reservations' element={<BookingPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/footer' element={<Footer />} />
      </Routes>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
    </Router>
  );
}

export default App;
