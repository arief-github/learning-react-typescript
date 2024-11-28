import { useEffect } from "react";
import { getPerson } from "../../types/getPerson";

export function PersonScore() {
    useEffect(() => {
        getPerson().then((person) => {
            console.log(`person data: ${person.name}`)   
        })
    }, [])

    return null
}