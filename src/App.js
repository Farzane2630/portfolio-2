import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes'
import Navigationbar from './components/Navbar/Navbar';
import Footer from './Footer/Footer/Footer'
function App() {

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
