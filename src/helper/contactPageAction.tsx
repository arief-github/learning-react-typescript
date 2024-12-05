import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Contact } from "../types/contact";

export async function contactPageAction({ request }: ActionFunctionArgs) {
    const formData = await request.formData()

    const contact = {
        name: formData.get('name'),
        email: formData.get('email'),
        reason: formData.get('reason'),
        notes: formData.get('notes')
    } as Contact

    console.log('Submitted Details', contact)

    return redirect(`/thank-you/${contact.name}`)
}