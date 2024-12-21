import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { Provider } from "react-redux";
import { store } from "./store";

import './App.css'

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={store}>
        <Header/>
        <Main />
      </Provider>
    </div>
  )

}

export default App;