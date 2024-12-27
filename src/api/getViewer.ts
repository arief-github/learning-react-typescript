import { ViewerData } from "./types";
import { gql } from "@apollo/client";

export const GET_VIEWER_QUERY = gql`
  query {
    viewer {
      name
      avatarUrl
    }
  }
  `;

type GetViewerResponse = {
    data: {
        viewer: ViewerData
    }
}

export async function getViewer() {
    const response = await fetch(import.meta.env.VITE_APP_GITHUB_URL!, {
            method: 'POST',
            body: JSON.stringify({
                query: GET_VIEWER_QUERY
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_PAT}`
            }
        })

    const body = (await response.json()) as unknown

    assertIsGetViewerResponse(body)

    return body.data
}

function assertIsGetViewerResponse(response: any): asserts response is GetViewerResponse {
    if(!('data' in response)) {
        throw new Error('No data in response')
    }

    if(typeof response.data !== 'object') {
        throw new Error('Data is not an object')
    }

    if(!('viewer' in response.data)) {
        throw new Error('No viewer in data')
    }

    if(typeof response.data.viewer !== 'object') {
        throw new Error('Viewer is not an object')
    }

    if(!('name' in response.data.viewer)) {
        throw new Error('No name in viewer')
    }

    if(typeof response.data.viewer.name !== 'string') {
        throw new Error('Name is not a string')
    }

    if(!('avatarUrl' in response.data.viewer)) {
        throw new Error('No avatarUrl in viewer')
    }

    if(typeof response.data.viewer.avatarUrl !== 'string') {
        throw new Error('AvatarUrl is not a string')
    }
}