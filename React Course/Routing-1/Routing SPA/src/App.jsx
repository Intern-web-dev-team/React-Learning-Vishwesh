import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import './App.css'

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/services', element: <Services/>},
  {path: '*', element: <><h1>404 Not Found, the page your are searching for is not even there!!</h1><a href='/'>Go back to home page</a></>}
]);

function App() {

  return (
    <>
    <main>
    <RouterProvider router={router} />
    </main>
    </>
  )
}

export default App;
