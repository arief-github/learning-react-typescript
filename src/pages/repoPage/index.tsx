import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// types API
import { getRepo } from "../../api/getRepo";
import { starRepo } from "../../api/starRepo";
import { RepoData, SearchCriteria } from '../../api/types'         

// Component
import { SearchRepoForm } from "../../components/SearchForm";
import { FoundRepo } from "../../components/FoundRepo";
import { StarRepoButton } from "../../components/StarRepoButton";

export function RepoPage() {
    const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>()

    const { data } = useQuery(['repo', 'searchCriteria'], () => getRepo(searchCriteria as SearchCriteria),
        { enabled: searchCriteria !== undefined }
    )

    const queryClient = useQueryClient()
    const { mutate } = useMutation(starRepo, {
        onSuccess: () => {
            queryClient.setQueryData<RepoData>(['repo', 'searchCriteria'], (repo) => {
                if (repo === undefined) return undefined

                return {
                    ...repo,
                    viewerHasStarred: true,
                }
            })
        }
    })

    function handleStarClick() {
        if(data) {
            mutate(data.repository.id)
        }
    }

    return (
        <main className="max-w-xs ml-auto mr-auto">
            <SearchRepoForm onSearch={setSearchCriteria} />
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

