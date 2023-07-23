import './App.css';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from './routes'
import Navigationbar from './components/Navbar/Navbar';
import Footer from './Footer/Footer/Footer'
import { useEffect } from 'react';
function App() {

  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])

  let router = useRoutes(routes)
  return (
    <>
    <Navigationbar />
    {router}
    <Footer />
    </>
  );
}

export default App;
