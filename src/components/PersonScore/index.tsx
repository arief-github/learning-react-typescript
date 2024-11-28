import { useEffect, useReducer } from "react";
import { getPerson } from "../../types/getPerson";
import State from "../../types/State";
import Action from "../../types/Action";

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'initialize' :
            return { name: action.name, score: 0, loading: false }
        case 'increment' :
            return { ...state, score: state.score + 1 }
        case 'decrement' :
            return { ...state, score: state.score - 1 }
        case 'reset' :
            return { ...state, score: 0 }
        default:
            return state                
    }
}

export function PersonScore() {
    const [{ name, score, loading }, dispatch] = useReducer(reducer, {
        name: undefined,
        score: 0,
        loading: false
    })

    useEffect(() => {
        getPerson().then(({ name }) => {
            dispatch({ type: 'initialize', name })
        })
    }, [])

    if(loading) return <div>Loading ...</div>

    return (
        <>
            <h3>{name} -_- {score}</h3>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>Add</button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Subtract</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }} >Reset</button>
        </>
    )
}