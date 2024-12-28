import { useState, useEffect } from "react"
import { IdValue } from "../types/props"

type Params = {
    checkedIds: IdValue[];
    onCheckedIdsChange: (checkedIds: IdValue[]) => void;
}

export function useChecked({ checkedIds, onCheckedIdsChange }: Params) {
    const [resolvedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(checkedIds || [])

    useEffect(() => {
        const isControlled = checkedIds !== undefined

        if(isControlled) {
            setResolvedCheckedIds(checkedIds)
        }

    }, [checkedIds])

    const handleCheckChange = (checkedId: IdValue) => () => {
        const isChecked = resolvedCheckedIds.includes(checkedId)
        const newCheckedIds = isChecked ? resolvedCheckedIds.filter((itemCheckedId) => itemCheckedId !== checkedId) : checkedIds.concat(checkedId)
    
        if (onCheckedIdsChange) {
            onCheckedIdsChange(newCheckedIds)
        } else {
            setResolvedCheckedIds(newCheckedIds)
        }

        setResolvedCheckedIds(newCheckedIds)
    }

    return { handleCheckChange, resolvedCheckedIds }
}