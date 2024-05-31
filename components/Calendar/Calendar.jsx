import React, { useEffect, useState } from 'react'
import cn, { generateDate, months } from './utils'
import dayjs from 'dayjs';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Calendar = ({ onSelect }) => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);

    useEffect(() => {
        onSelect(currentDate.toDate().toDateString())
    }, [])

    return (
            <div className="w-[260px] border-1 dark:border-[#d3d3d314] dark:border-2 rounded-md p-[20px] dark:bg-transparent">
                <div className='w-[220px] mb-2'>
                    <div className="flex gap-6 items-center w-full justify-between">
                        <GrFormPrevious
                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all dark:text-white"
                            onClick={() => {
                                setToday(today.month(today.month() - 1));
                            }}
                        />
                        <h1 className="select-none font-semibold dark:text-white">
                            {months[today.month()]} {today.year()}
                        </h1>
                        <GrFormNext
                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all dark:text-white"
                            onClick={() => {
                                setToday(today.month(today.month() + 1));
                            }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(7,_minmax(0,_2rem))] justify-items-center">
                    {days.map((day, index) => {
                        return (
                            <h1
                                key={index}
                                className="text-sm text-center h-8 w-8 grid place-content-center text-gray-500 select-none"
                            >
                                {day}
                            </h1>
                        );
                    })}
                </div>

                <div className=" grid grid-cols-[repeat(7,_minmax(0,_2rem))]">
                    {generateDate(today.month(), today.year()).map(
                        ({ date, currentMonth, today }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-0 text-center h-8 grid place-content-center text-sm"
                                >
                                    <button
                                        className={cn(
                                            currentMonth ? "" : "text-gray-400 dark:!text-gray-400",
                                            today
                                                ? "bg-gray-300  text-black"
                                                : "",
                                            selectDate
                                                .toDate()
                                                .toDateString() ===
                                                date.toDate().toDateString()
                                                ? "bg-black text-white dark:bg-white dark:text-black"
                                                : "text-black dark:text-white",
                                            "h-8 w-8 rounded-md grid place-content-center cursor-pointer select-none"
                                        )}
                                        onClick={() => {
                                            setSelectDate(date);
                                            onSelect(date.toDate().toDateString())
                                        }}
                                    >
                                        {date.date()}
                                    </button>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
    )
}

export default Calendar