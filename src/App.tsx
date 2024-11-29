import { Alert } from "./components/Alert";
import './App.css'

function App() {
  return (
    <div className="App">
      <Alert type="success" heading="success" closable>Everything is fine</Alert>
    </div>
  )

}

export default App;