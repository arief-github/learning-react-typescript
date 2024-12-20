import { User } from "../../api/authenticate";

type Props = {
    user: undefined | User;
    onSignInClick: () => void;
    loading: boolean;
}

export function Header({
    user,
    onSignInClick,
    loading
}: Props) {
    const buttonClass = "whitespace-nowrap inline-flex items-center justify-center ml-auto px-4 py-2 w-36 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"

    return (
        <header className="flex justify-between items-center border-b-2 border-gray-100 py-6">
            {
                user ? (<span className="ml-auto font-bold"> { user.name } has Sign In ! </span>) : (<button onClick={onSignInClick} className={buttonClass} disabled={loading}>{ loading ? '...' : 'Sign In' }</button>)
            }
        </header>
    )
}