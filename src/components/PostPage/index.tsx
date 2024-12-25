import { Suspense } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostData } from '../../types/post_data'
import { savePost } from '../posts/savePost'
import { PostsList } from '../PostList'
import { NewPostForm } from '../NewPostForm'
import { assertIsPosts } from '../posts/getPosts'
import { useLoaderData, useNavigate ,Await } from 'react-router-dom'

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
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate } = useMutation(savePost, {
        onSuccess: (savedPost) => {
            queryClient.setQueryData<PostData[]>(['postsData'], (oldPosts) => {
                if (oldPosts === undefined) {
                    return [savedPost];
                } else {
                    return [savedPost, ...oldPosts];
                }
            });

            navigate("/")
        },
    });

    const data = useLoaderData()
    assertIsData(data)

    return (
        <div className='w-96 mx-auto mt-6'>
            <h2 className='text-xl text-slate-900 font-bold'>Posts</h2>
            <NewPostForm onSave={mutate} />
            <Suspense fallback={<div>Fetching...</div>}>
                <Await resolve={data.posts}>
                {(posts) => {
                    assertIsPosts(posts);
                    return <PostsList posts={posts} />;
                }}
                </Await>
            </Suspense>
        </div>
    )
}