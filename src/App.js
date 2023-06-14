import './App.css';
import Nav from './Components/Nav';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import BookingPage from './Components/BookingPage';
import Home from './Components/Home';
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/reservations' element={<BookingPage />} />
        <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
      </Route>
    )
  );


  return (
    <RouterProvider router={router}>
      <Nav />
      <div>
        <Outlet />
      </div>
    </RouterProvider>
  );
}

const Root = () => {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
