import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar'

const CalendarColorWrapper = () => {
    const [date,setDate]=useState('')
    return (
        <Calendar onSelect={setDate} selected={date} mode='range' activeClassName='bg-green-400 text-white dark:bg-green-600' />
    )
}

export { CalendarColorWrapper }