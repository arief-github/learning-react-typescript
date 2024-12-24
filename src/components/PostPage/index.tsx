import { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router-dom'
import { NewPostData, PostData } from '../../types/post_data'
import { savePost } from '../posts/savePost'
import { PostsList } from '../PostList'
import { NewPostForm } from '../NewPostForm'

type Data = {
    posts: PostData[]
}

export function assertIsData(data: unknown): asserts data is Data {
    if (typeof data !== 'object') {
        throw new Error("Data isnt an object")
    }

    if (data === null) {
        throw new Error(" Data is null ")
    }

    if (!('posts' in data)) {
        throw new Error("Data doesn't contain posts")
    }
}

export function PostPage() {
    const data = useLoaderData()
    assertIsData(data)

    async function handleSave(newPostData: NewPostData) {
        await savePost(newPostData)
    }

    return (
        <div className='w-96 mx-auto mt-6'>
            <h2 className='text-xl text-slate-900 font-bold'>Posts</h2>
            <NewPostForm onSave={handleSave} />
            <Suspense fallback={<div>Fetching...</div>}>
                <Await resolve={data.posts}>
                    {(posts) => (
                        <PostsList posts={posts} />
                    )}
                </Await>
            </Suspense>
        </div>
    )
}