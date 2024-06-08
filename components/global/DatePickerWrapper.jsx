import React, { useState } from 'react'
import DatePicker from '../DatePicker/DatePicker'
const DatePickerWrapper = ({mode}) => {
    const [date, setDate] = useState('')
    return (
        <div>
            <DatePicker onSelect={setDate} mode={mode} selected={date}/>
        </div>
    )
}

export default DatePickerWrapper