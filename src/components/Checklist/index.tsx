type Props<Data> = {
    data: Data[],
    id: keyof Data,
    primary: keyof Data,
    secondary: keyof Data,
}

export function CheckList<Data>({
    data, id, primary, secondary
}: Props<Data>) {
    return (
        <ul className="bg-gray-300 rounded p-10">
            {data.map((item) => {
                const idValue = item[id] as string | number

                if(typeof idValue !== 'string' && typeof idValue !== 'number') {
                    return null
                }

                const primaryText = item[primary] as string

                if (typeof primaryText !== 'string') {
                    return null
                }

                const secondaryText = item[secondary] as string

                // Check if secondaryText is a string before using it
                return (
                    <li key={idValue} className="bg-white p-6 shadow rounded mb-4">
                        <div className="text-xl text-gray-800 pb-1">
                            {primaryText}
                        </div>
                        {
                            typeof secondaryText === 'string' && (  // Use && for conditional rendering
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