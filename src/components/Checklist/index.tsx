import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'
import { useChecked } from '../../hooks/useChecked'
import { IdValue } from '../../types/props'
import { isChecked } from '../../helpers/isChecked'

type Props<Data> = {
    data: Data[],
    id: keyof Data,
    primary: keyof Data,
    secondary: keyof Data,
    renderItem?: (item: Data, isChecked: boolean) => ReactNode
    checkedIds?: IdValue[]
    onCheckedIdsChange?: (checkedIds: IdValue[]) => void
} & ComponentPropsWithoutRef<'ul'>

export function CheckList<Data>({
    data, id, primary, secondary, renderItem, checkedIds , onCheckedIdsChange ,...ulProps
}: Props<Data>) {
    const { resolvedCheckedIds, handleCheckChange } = useChecked({
        checkedIds: checkedIds ?? [],
        onCheckedIdsChange: onCheckedIdsChange ?? (() => {})
    })

    return (
        <ul className="bg-gray-300 rounded p-10" {...ulProps}>
            {data.map((item) => {

                const idValue = item[id] as string | number

                if (renderItem) {
                    return renderItem(item, isChecked(resolvedCheckedIds, idValue))
                }

                if(typeof idValue !== 'string' && typeof idValue !== 'number') {
                    return null
                }

                const primaryText = item[primary] as string

                if (typeof primaryText !== 'string') {
                    return null
                }

                const secondaryText = item[secondary] as string

                return (
                    <li key={idValue} className="bg-white p-6 shadow rounded mb-4">
                        <label className='flex items-center'>
                            <input type="checkbox" checked={resolvedCheckedIds.includes(idValue)} onChange={handleCheckChange(idValue)} />

                        </label>
                        
                        <div className="text-xl text-gray-800 pb-1">
                            {primaryText}
                        </div>
                        {
                            typeof secondaryText === 'string' && (
                                <div className="text-sm text-gray-500">
                                    { secondaryText }
                                </div>
                            )
                        }
                    </li>
                )
            })}
        </ul>
    )
}