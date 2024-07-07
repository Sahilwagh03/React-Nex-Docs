import React, { useState } from 'react'
import DatePicker from '../DatePicker/DatePicker'

const DateTimePickerWrapper = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('');
    return (
        <div>
            <DatePicker onSelect={setDate} selected={date} time={time} setTime={setTime} timer />
        </div>
    )
}

export default DateTimePickerWrapper