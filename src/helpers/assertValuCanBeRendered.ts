import { IdValue } from '../types/props'

export function assertValueCanBeRendered(value: unknown): asserts value is IdValue {
    if(typeof value !== 'string' && typeof value !== "number") {
        throw new Error("value is not a string or a number")
    }
}