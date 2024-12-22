import { useEffect, useState } from 'react'
import { getPosts } from '../posts/getPosts'
import { PostData, NewPostData } from '../../types/post_data'
import { savePost } from '../posts/savePost'
import { PostsList } from '../PostList'
import { NewPostForm } from '../NewPostForm'

export function PostPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<PostData[]>([])

    useEffect(() => {
        let cancel = false;

        getPosts().then((data) => {
            if(!cancel) {
                setPosts(data)
                setIsLoading(false)
            }
        })

        return () => {
            cancel = true
        }
    }, [])

    if(isLoading) {
        return <div className='w-96 mx-auto mt-6'>Loading...</div>
    }

    async function handleSave(newPostData: NewPostData) {
        const newPost = await savePost(newPostData)
        setPosts([newPost, ...posts])
    }

    return (
        <div className='w-96 mx-auto mt-6'>
            <h2 className='text-xl text-slate-900 font-bold'>Posts</h2>
            <NewPostForm onSave={handleSave} />
            <PostsList posts={posts} />
        </div>
    )
}