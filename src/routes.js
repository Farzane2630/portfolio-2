import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import MainBlog from './pages/MainBlog';
import NotFound from './components/NotFound';

let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <MainBlog /> },
  { path: "*", element: <NotFound /> },
];

export default routes
