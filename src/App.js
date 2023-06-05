import './App.css';
import Nav from './Components/Nav';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import BookingPage from './Components/BookingPage';
import Home from './Components/Home';
import Specials from './Components/Specials';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/reservations' element={<BookingPage />} />
        <Route path='#Menu' element={<Home />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


const Root = () => {
  return(
    <>
    <Nav />
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default App;

