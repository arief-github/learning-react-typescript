import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ProductsPage } from "../pages/Products";
import { ContactPage } from "../pages/Contacts";
import { ThankYouPage } from "../components/ThankYouPage";
import { contactPageAction } from "../helper/contactPageAction";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="contacts"/>
    },
    {
        path: 'products',
        element: <ProductsPage />,
    },
    {
        path: 'contacts',
        element: <ContactPage />,
        action: contactPageAction
    },
    {
        path: '/thank-you/:name',
        element: <ThankYouPage/>
    }
])

export function Routes() {
    return (
        <RouterProvider router={router} />
    )
}