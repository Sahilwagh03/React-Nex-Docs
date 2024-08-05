import React, { useState } from 'react'
import Input from '../Input/Input'
const InputWrapper = () => {
    const [value, setvalue] = useState('')
    return (
        <Input type="email" placeholder="j@example.com" value={value} onChange={(e) => setvalue(e.target.value)}/>
    )
}

export default InputWrapper