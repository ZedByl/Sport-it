import React, {useEffect, useRef, useState} from "react";
import './DataPicke.css'

import cn from 'classnames';
import next from './../Content/img/next.svg'
import prev from './../Content/img/prev.svg'
import * as calendar from "./calendar";
import _ from 'lodash'

const DatePicker1 = () => {
    const weekDayNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    const [date, setDate] = useState(new Date())
    const {getMonthData} = calendar || {}
    const [isActive, setIsActive] = useState(false)
    const [year, setYear] = useState(2021)
    const [month, setMonth] = useState(new Date().getMonth())
    const [day, setDay] = useState(new Date().getDate())
    const [dayName, setDayName] = useState(weekDayNames[date.getDay()])
    let startYear = new Date().getFullYear();
    const years = []
    while (startYear <= 2030)
    years.push(startYear++)

    const monthNames = [
        {
            key: 0,
            name:'Январь'
        },{
            key: 1,
            name: 'Февраль'
        },{
            key: 2,
            name: 'Март'
        },{
            key: 3,
            name: 'Апрель'
        },{
            key: 4,
            name: 'Май'
        },{
            key: 5,
            name: 'Июнь'
        },{
            key: 6,
            name: 'Июль'
        },{
            key: 7,
            name: 'Август'
        },{
            key: 8,
            name: 'Сентябрь'
        },{
            key: 9,
            name: 'Октябрь'
        },{
            key: 10,
            name: 'Ноябрь'
        },{
            key: 11,
            name: 'Декабрь'
        }]
    const monthData = getMonthData(year, month);




    const handlePrevMonthButtonClick = () => {
        if (month <= 0 ) {
            setYear(year - 1)
            setMonth(11)
        } else
            setMonth(month - 1)
    };

    const handleNextMonthButtonClick = () => {
        if (month >= 11 ) {
            setYear(year + 1)
            setMonth(0)
        } else
            setMonth(month + 1)

    };

    const handleDayClick = (date) => {
        setDayName(weekDayNames[date.getDay()])
        setDay(date.getDate())
    }
    return (
        <>
            <div className={'selectedDate'}><p className={'dateShow'} onClick={() => isActive ? setIsActive(false) : setIsActive(true)}>
                {day + '.' + (month + 1) + '.' + year}
            </p></div>
            <div className={cn(isActive?  'activeShow' : 'calendar')} >
                <header className={'headDates'}>
                    <img className={'imgBtn'} src={prev}
                         onClick={() => handlePrevMonthButtonClick()}
                    />

                    &nbsp;

                    <select
                        className={'dropDown'}
                        onChange={(e) => setMonth(e.target.value)}
                        value={month}
                    >
                        {_.map(monthNames, (m) =>
                            <option key={m.key} value={m.key}>{m.name}</option>

                        )}

                    </select>

                    <select
                        className={'dropDown'}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                        value={year}
                    >
                        {_.map(years, (y) =>
                            <option key={y} value={y}>{y}</option>
                        )}
                    </select>

                    &nbsp;
                    <img className={'imgBtn'} src={next}
                          onClick={() => handleNextMonthButtonClick()}
                    />
                </header>

                <table className={'days'}>
                    <thead>
                    <tr>
                        {_.map(weekDayNames, (wd) =>
                            <th key={wd}>{wd}</th>
                        )}
                    </tr>
                    </thead>

                    <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className={'week'}>
                            {week.map((date, index) => date?
                                <td
                                    key={index}
                                    className={cn('day', {
                                        'today': calendar.areEqual(date, currentDate),
                                        'selected': calendar.areEqual(date, selectedDate)
                                    })}
                                     onClick={() => handleDayClick(date)}
                                >{date.getDate()}</td>
                                :
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
export default DatePicker1