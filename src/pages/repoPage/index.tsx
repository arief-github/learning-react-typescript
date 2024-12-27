import { useState } from 'react'
import { useLazyQuery, useMutation, useApolloClient } from '@apollo/client'      
import { GET_REPO } from '../../api/getRepo'
import { STAR_REPO } from '../../api/starRepo'
// Component
import { SearchRepoForm } from "../../components/SearchForm";
import { FoundRepo } from "../../components/FoundRepo";
import { StarRepoButton } from "../../components/StarRepoButton";

import { SearchCriteria } from '../../api/types'

export function RepoPage() {
    const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>()

    const [getRepo, { data }] = useLazyQuery(GET_REPO)

    const queryClient = useApolloClient()

    const [starRepo] = useMutation(STAR_REPO, {
        onCompleted: () => {
            queryClient.cache.writeQuery({
                query: GET_REPO,
                data: {
                    repository: {
                        ...data.repository,
                        viewerHasStarred: true,
                    }
                },
                variables: searchCriteria
            })
        }
    })

    function handleSearch(search: SearchCriteria) {
        getRepo({
            variables: { ...search }
        })

        setSearchCriteria(search)
    }

    async function handleStarClick() {
        if(data) {
            starRepo({ variables: { repoId: data.repository.id } })
        }
    }

    return (
        <main className="max-w-xs ml-auto mr-auto">
            <SearchRepoForm onSearch={handleSearch} />
            { data && (
                <>
                    <FoundRepo
                        name={ data.repository.name }
                        description={ data.repository.description ?? "" }
                        stars={ data.repository.stargazers.totalCount }
                    />
                    { !data.repository.viewerHasStarred ? (
                        <StarRepoButton onClick={handleStarClick} />
                    ) : null }
                </>
            )}
        </main>
    )
}

