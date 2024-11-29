import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "../pages/Products";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'products',
                element: <ProductsPage />,
            },
        ]
    },
])

export function Routes() {
    return (
        <RouterProvider router={router} />
    )
}