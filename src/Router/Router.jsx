import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Authentication from "../Authentication/Authentication";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import PrivateProvider from "./PrivateProvider";
import BookNow from "../components/BookNow/BookNow";
import MyBooking from "../Pages/MyBooking/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: (
            <Services />
        ),
      },
      {
path:'bookNow/:id',
element:<PrivateProvider>
   <BookNow />
</PrivateProvider>,
loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

      },

      {
        path: "my-bookings",
        element: (
          <PrivateProvider>
            <MyBooking />
          </PrivateProvider>
        ),
        
      }
    ],
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
]);
export default router;
