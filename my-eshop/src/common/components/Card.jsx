//bg-white border shadow ${isRound && 'rounded'} p-2 ${className}`

import clsx from "clsx"

// const defaultClasses = 'bg-white border shadow p-2 rounded flex flex-col';

function Card({ className, isRound, children }) {
    return (
        <div className={clsx('bg-white', 'border', 'shadow', 'p-2', isRound && 'rounded', className, 'flex', 'flex-col')}>
            {children}
        </div>
    )
}

export default Card
