import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Header } from './components/Header'
import { RepoPage } from './pages/repoPage'


// import { Alert } from "./components/Alert";
import './App.css'

const queryClient = new ApolloClient({
  uri: import.meta.env.VITE_APP_GITHUB_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_PAT}`
  }
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={queryClient}>
        <Header/>
        <RepoPage/>
      </ApolloProvider>
    </div>
  )

}

export default App;