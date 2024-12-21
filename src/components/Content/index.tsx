import { useSelector } from "react-redux"
import { RootState } from "../../store" 

export function Content() {
    const permissions = useSelector((state: RootState) => state.user.permissions)

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