import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getPosts } from './components/posts/getPosts';
import { PostPage } from './components/PostPage';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostPage/>,
    loader: async () => ({ posts: await getPosts() })
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )

}

export default App;
