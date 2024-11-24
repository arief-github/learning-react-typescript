import { Alert } from "./components/Alert";
import './App.css'

function App() {
  return (
    <div className="App">
      <Alert type="warning" heading="warning" closable>Everything is !fine</Alert>
    </div>
  )

}

export default App;