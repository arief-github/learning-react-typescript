import { useState } from "react"
import Props from "../../types/props"

export function Alert({ type = "information", heading, children, closable, onClose }: Props) {
    const [visible, setVisible] = useState<boolean>(true)

    if(!visible) {
        return null
    }

    const handleCloseClick = () => {
      setVisible(false)
      if(onClose) {
        onClose()
      }
    }

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
            {
                closable ? (
                    <button aria-label="Close" onClick={handleCloseClick}>
                        <span role="img" aria-label="Close">
                            ❌
                        </span>
                    </button>
                ) : null
            }
            <div>
                {children}
            </div>
        </>
    )
}
