import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import News from "../Page/News";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
           path: '/',
           element: <Home/>,
           loader: () => fetch("/news.json")
        },
        {
           path: '/login',
           element: <Login/>
        },
        {
           path: '/register',
           element: <Register/>
        },
        {
         path: "/news/:id",
         element: <PrivateRouter> <News/></PrivateRouter>,
         loader: () => fetch('/news.json')
         
        }


    ],
  },
]);

export default router ;
