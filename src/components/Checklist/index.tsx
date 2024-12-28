import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'
import { useChecked } from '../../hooks/useChecked'

type Props<Data> = {
    data: Data[],
    id: keyof Data,
    primary: keyof Data,
    secondary: keyof Data,
    renderItem?: (item: Data) => ReactNode
} & ComponentPropsWithoutRef<'ul'>

export function CheckList<Data>({
    data, id, primary, secondary, renderItem, ...ulProps
}: Props<Data>) {
    const { handleCheckChange, checkedIds } = useChecked()

    return (
        <ul className="bg-gray-300 rounded p-10" {...ulProps}>
            {data.map((item) => {

                if (renderItem) {
                    return renderItem(item)
                }

                const idValue = item[id] as string | number

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
                            <input type="checkbox" checked={checkedIds.includes(idValue)} onChange={handleCheckChange(idValue)} />

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