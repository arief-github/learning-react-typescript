import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AppProvider } from "./context/AppContext";

import './App.css'

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <AppProvider>
        <Header/>
        <Main />
      </AppProvider>
    </div>
  )

}

export default App;