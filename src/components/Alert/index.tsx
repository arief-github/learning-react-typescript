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
        <div className={`inline-flex flex-col text-left px-4 py-3 rounded-md border-1 border-transparent ${type === 'warning' ? 'text-amber-900' : 'text-teal-900'} ${type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'} `}>
            <div className="flex items-center mb-1">
                <span role="img"
                    aria-label={type === "warning" ? "warning" : "information"}
                    className="w-7"
                >
                     {type === 'warning' ? '⚠' : 'ℹ️'}
                </span>
                <span className="font-bold">{heading}</span>
            </div>
            {
                closable ? (
                    <button aria-label="Close" onClick={handleCloseClick} className="border-none bg-transparent cursor-pointer">
                        <span role="img" aria-label="Close">
                            ❌
                        </span>
                    </button>
                ) : null
            }
            <div className="ml-7">
                {children}
            </div>
        </div>
    )
}
