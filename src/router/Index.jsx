import { createHashRouter } from "react-router";
import App from "../pages/App";
import Home from "../pages/Home";
import Optical from "../pages/Optical";
import NotFound from "../pages/NotFound";
import Functional from "../pages/Functional";
import Sunglasses from "../pages/Sunglasses";

const router = createHashRouter([
  {
    path: "/",
    element: <App />, // 新增 AppLayout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "optical",
        element: <Optical />,
      },
      {
        path: "functional",
        element: <Functional />,
      },
      {
        path: "sunglasses",
        element: <Sunglasses />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
