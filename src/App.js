import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.js";
import Test from "./Test.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
