import Props from "../../types/props"

export function Alert({ type = "information", heading, children }: Props) {
    return (
        <>
            <div>
                <span role="img"
                    aria-label={type === "warning" ? "warning" : "information"}
                >
                     {type === "warning" ? "⚠" : "ℹ️"}
                </span>
                <span>{heading}</span>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}