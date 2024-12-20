type Props = {
    permissions: undefined | string[];
}

export function Content({ permissions }: Props) {
    if (permissions === undefined) {
        return null
    }

    return permissions.includes('admin') ? (
        <p className="mt-4 text-lg text-center ">
            Some important stuff that only an admin can do 
        </p>
    ) : (
        <p className="mt-4 text-lg text-center">
            Insufficient permissions
        </p>
    )
}