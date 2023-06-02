import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/home'
import ContactPage from "./pages/contact";
import ProductPage from "./pages/products";
import RootLayout from "./layout/rootLayout";
import Error from "./pages/error";
import ProductDetails from "./pages/productDetails";

const router = createBrowserRouter([
  {
    path: '/root', 
    element: <RootLayout />,
    errorElement: <Error />,
    children:[
      // without / will be relative path
      { path: '', element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'products', element: <ProductPage /> }, 
      { path: 'products/:productId', element: <ProductDetails /> }
    ]
  },

])
 
function App() {
  return <RouterProvider router={router} />;
}

export default App;
