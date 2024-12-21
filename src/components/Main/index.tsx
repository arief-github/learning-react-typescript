import { useAppContext } from "../../context/AppContext";
import { Content } from "../Content";

export function Main() {
    const { user } = useAppContext()

    return (
        <main className="py-8">
            <h1 className="text-3xl text-center font-bold underline">Welcome</h1>
            <p className="mt-8 text-xl text-center">
                {user ? `Hello ${user.name}!` : "Please sign in"}
            </p>
            <Content/>
        </main>
    )
}