type Action = | { type: 'initialize', name: string }
| { type: 'increment' }
| { type: 'decrement' }
| { type: 'reset' }

export default Action;