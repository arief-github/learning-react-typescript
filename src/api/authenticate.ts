export type User = {
    id: string;
    name: string;
}

export function authenticate(): Promise<User | undefined> {
    return new Promise((resolve) => setTimeout(() => resolve({ id: "1", name: "Okocha" })))
}

export function authorize(id: string): Promise<string[]> {
    return new Promise((resolve) => setTimeout(() => resolve(["admin"]), 1000))
}