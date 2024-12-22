import { REACT_APP_API_URL } from "../../constants";
import { NewPostData, SavedPostData } from "../../types/post_data";

export async function savePost(newPostData: NewPostData) {
    const response = await fetch(REACT_APP_API_URL, {
        method: 'POST',
        body: JSON.stringify(newPostData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const body = (await response.json()) as unknown

    assertIsSavedPost(body)

    return { ...newPostData, ...body }
}

function assertIsSavedPost(post: unknown): asserts post is SavedPostData {
    if (typeof post !== 'object' || post === null || !('id' in post)) {
        throw new Error("post doesn't contain id");
    }

    const id = typeof post.id === 'string' ? Number(post.id) : post.id;

    if (typeof id !== 'number') {
        throw new Error('id is not a number');
    }
}