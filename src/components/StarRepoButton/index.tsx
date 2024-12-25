type Props = {
    onClick: () => void;
}

export function StarRepoButton({ onClick }: Props) {
    return (
        <button onClick={onClick} className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Star
        </button>
    );
}