import React from "react";
import _ from 'lodash'
import {useDatePicker} from "./useDatePicker";
import cn from 'classnames';
import next from './../Content/img/next.svg'
import prev from './../Content/img/prev.svg'
import styles from './DataPicker.module.scss'

const DatePicker = () => {
    const {
        createMonthArray,
        weekDayNames,
        monthNames,
        monthNames1,
        years,
        currentDay,
        selectDay, setSelectDay,
        isActive, setIsActive,
        year, setYear,
        month, setMonth,
        day, setDay,
        dayName, setDayName} = useDatePicker() || {}



    const date = `${day}(${dayName}).${monthNames1[selectDay.getMonth()]}.${selectDay.getFullYear()}`
    const handlePrevMonthButtonClick  = () => {
        if (year > 2021 || month > 0) {
            if (month <= 0) {
                setYear(year - 1)
                setMonth(11)
            } else
                setMonth(month - 1)
        }
    };

    const handleNextMonthButtonClick = () => {
        if (year < 2030 || month < 11) {
            if (month >= 11) {
                setYear(year + 1)
                setMonth(0)
            } else
                setMonth(month + 1)
        }
    };

    const handleDayClick = (date, day) => {
        setDayName(weekDayNames[day])
        setDay(date)
        setSelectDay(new Date(year, month, date))
    }


    const switcherDatePicker = () => {
        isActive ?
            setIsActive(false) :
            setIsActive(true)
    }

    const handleCurrentDayAndSelectDay = (a, b) => {
        if (!a) return false
        return (a.getFullYear() === year &&
            a.getMonth() === month &&
            a.getDate() === b)
    }
    return (
        <>
            <div className={styles.selectedDate}>
                <p className={styles.dateShow} onClick={switcherDatePicker}>
                    {date}
                </p>
            </div>
            <div className={cn(isActive ? styles.activeShow : styles.calendar)}>
                <header className={styles.headDates}>
                    <img className={styles.imgBtn} alt={'arrowLeft'} src={prev} onClick={() => handlePrevMonthButtonClick()}/>
                    <select
                        className={styles.dropDown}
                        onChange={(e) => setMonth(parseInt(e.target.value))}
                        value={month}
                    >
                        {_.map(monthNames, (months, index) =>
                            <option key={index} value={index}>{months}</option>
                        )}
                    </select>
                    <select
                        className={styles.dropDown}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                        value={year}
                    >
                        {_.map(years, (year) =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>
                    <img className={styles.imgBtn} alt={'arrowRight'} src={next}
                         onClick={() => handleNextMonthButtonClick()}
                    />
                </header>
                <table className={styles.days}>
                    <thead>
                    <tr>
                        {_.map(weekDayNames, (wd) =>
                            <th key={wd}>{wd}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {_.map(createMonthArray, (daysInMonth, index) =>
                        <tr key={index} className={styles.week}>
                            {_.map(daysInMonth, (days, index) => days ?
                                <td
                                    key={index}
                                    className=
                                        {cn(styles.day,
                                            handleCurrentDayAndSelectDay(currentDay, days) && styles.today,
                                            handleCurrentDayAndSelectDay(selectDay, days) && styles.selected
                                        )}
                                    onClick={() => handleDayClick(days, index)}
                                >
                                    {days}
                                </td> :
                                <td key={index}/>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DatePicker
