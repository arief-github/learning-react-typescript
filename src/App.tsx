import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/Header'
import { RepoPage } from './pages/repoPage'

// import { Alert } from "./components/Alert";
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header/>
        <RepoPage/>
      </QueryClientProvider>
    </div>
  )

}

export default App;