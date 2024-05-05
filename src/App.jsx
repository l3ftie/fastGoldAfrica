import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { About, Contact, Error, Home, Transport } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/transportation",
    element: <Transport />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
