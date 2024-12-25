import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getPosts } from './components/posts/getPosts';
import { PostPage } from './components/PostPage';
import './App.css'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <PostPage/>,
    loader: async () => {
      const existingData = queryClient.getQueryData(['postsData'])

      if (existingData) {
        return defer({ posts: existingData })
      }

      return defer({
        posts: queryClient.fetchQuery(['postsData'], getPosts)
      })
    }
  }
])

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )

}

export default App;
