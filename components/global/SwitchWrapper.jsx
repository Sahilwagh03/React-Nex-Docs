import React, { useState } from 'react'
import Switch from '../Switch/Switch'
const SwitchWrapper = ({ disabled, showlabel }) => {
    const [enabled, setIsEnabled] = useState(false);
    return (
        <div className='flex flex-col gap-2 items-center justify-center md:flex-row md:gap-0'>
            <Switch enabled={enabled} onChange={(toggle) => setIsEnabled(toggle)} disabled={disabled} />
            {
                showlabel &&
                <div className="ml-2 md:ml-4">
                    <p className="font-semibold">
                        Switch is {enabled ? 'Enabled' : 'Disabled'}
                    </p>
                </div>
            }

        </div>
    )
}

export default SwitchWrapper