import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "../pages/Products";
import { ProductPage } from "../pages/ProductPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";

import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'products',
                element: <ProductsPage />,
            },
            {
                path: 'products/:id',
                element: <ProductPage />,
            }
        ]
    },
])

export function Routes() {
    return (
        <RouterProvider router={router} />
    )
}