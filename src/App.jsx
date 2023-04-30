import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./components/Layout"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p> Loading...</p>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <h1>Error 404: page not found</h1>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p> Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<p> Loading...</p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p> Loading...</p>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
