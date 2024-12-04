import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "../pages/Products";
import { ContactPage } from "../pages/Contacts";

const router = createBrowserRouter([
    {
        path: 'products',
        element: <ProductsPage />,
    },
    {
        path: 'contacts',
        element: <ContactPage />,
    },
])

export function Routes() {
    return (
        <RouterProvider router={router} />
    )
}