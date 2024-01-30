import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./screens/Notfound";
import Layout from "./screens/Layout";
import Home from "./screens/Home";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
