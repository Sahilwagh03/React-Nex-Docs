import React, { useEffect, useState } from 'react';
import cn, { generateDate, months } from './utils';
import dayjs from 'dayjs';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Calendar = ({ onSelect, selected, datePicker, mode = 'single' }) => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if (!datePicker) {
            onSelect(currentDate.toDate().toDateString());
            setSelectDate(currentDate);
        } else {
            if (mode === 'range') {
                onSelect({ startDate: selected?.startDate?.toDate().toDateString(), endDate: selected?.endDate?.toDate().toDateString() });
                setStartDate(selected.startDate);
                setEndDate(selected.endDate);
            } else {
                onSelect(selected == '' ? selected : selected.toDate().toDateString());
                setSelectDate(selected == '' ? null :  selected);
            }
        }
    }, []);

    const handleDateClick = (date) => {
        if (mode === 'range') {
            if (!startDate || (startDate && endDate)) {
                setStartDate(date);
                setEndDate(null);
                onSelect({ startDate: date.toDate().toDateString(), endDate: null });
            } else if (startDate && !endDate) {
                if (date.isBefore(startDate)) {
                    setStartDate(date);
                    onSelect({ startDate: date.toDate().toDateString(), endDate });
                } else {
                    setEndDate(date);
                    onSelect({ startDate: startDate.toDate().toDateString(), endDate: date.toDate().toDateString() });
                }
            }
        } else {
            if (selectDate && selectDate.toDate().toDateString() === date.toDate().toDateString()) {
                setSelectDate(null);
                onSelect('');
            } else {
                setSelectDate(date);
                onSelect(date.toDate().toDateString());
            }
        }
    };

    const isInRange = (date) => {
        if (startDate && endDate) {
            return date.isAfter(startDate) && date.isBefore(endDate);
        }
        return false;
    };

    const isStartOrEnd = (date) => {
        return (startDate && startDate.toDate().toDateString() === date.toDate().toDateString()) ||
            (endDate && endDate.toDate().toDateString() === date.toDate().toDateString());
    };

    const getBorderRadius = (date, index) => {
        const startOfRow = index % 7 === 0;
        const endOfRow = index % 7 === 6;

        if (!isStartOrEnd(date) && isInRange(date)) {
            if (startOfRow) {
                return 'rounded-r-[0px]';
            }
            if (endOfRow) {
                return 'rounded-l-[0px]';
            }
            return 'rounded-none';
        }

        return '';
    };

    return (
        <div className="max-w-[260px] w-[100%] border-1 dark:border-[#d3d3d314] dark:border-2 rounded-md p-[20px] dark:bg-transparent">
            <div className='w-[100%]'>
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
                {days.map((day, index) => (
                    <h1
                        key={index}
                        className="text-sm text-center h-8 w-8 grid place-content-center text-gray-500 select-none"
                    >
                        {day}
                    </h1>
                ))}
            </div>

            <div className="grid grid-cols-[repeat(7,_minmax(0,_2rem))] gap-y-2">
                {generateDate(today.month(), today.year()).map(
                    ({ date, currentMonth, today }, index) => (
                        <div
                            key={index}
                            className="p-0 text-center h-8 grid place-content-center text-sm"
                        >
                            <button
                                className={cn(
                                    currentMonth ? '' : "text-gray-400 dark:!text-gray-400",
                                    today ? "bg-gray-300 text-black dark:bg-[#27272a]" : "",
                                    mode === 'single' && selectDate && selectDate.toDate().toDateString() === date.toDate().toDateString()
                                        ? currentMonth
                                            ? "bg-black text-white dark:bg-white dark:text-black"
                                            : "bg-[#27272a80] text-white dark:bg-[#27272a80] dark:text-white"
                                        : mode === 'range' && isStartOrEnd(date)
                                            ? "bg-black text-white dark:bg-white dark:text-black"
                                            : isInRange(date)
                                                ? "text-black dark:bg-[#27272a80] dark:text-white"
                                                : "text-black dark:text-white",
                                    "h-8 w-8 rounded-md grid place-content-center cursor-pointer select-none",
                                    getBorderRadius(date, index)  // Add border radius logic
                                )}
                                onClick={() => handleDateClick(date)}
                                style={isInRange(date) ? { borderRadius: getBorderRadius(date, index) } : {}}
                            >
                                {date.date()}
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Calendar;
