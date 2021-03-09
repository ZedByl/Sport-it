import React from "react";
import './DataPicke.css'
import * as calendar from './calendar.js'
import cn from 'classnames';
import next from './../Content/img/next.svg'
import prev from './../Content/img/prev.svg'

export default class DataPicker extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        onChange: Function.prototype,
        isActive: false
    }

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectDate: null,
    };
    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1)

        this.setState({ date })
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1)

        this.setState({ date })
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date })
    };

    handleDayClick = (date) => {

        this.setState({ selectedDate: date });

        this.props.onChange(date);
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    handleDataChang = () => {


    }



    render() {
        const isActive = this.state.isActive;
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;
        const monthData = calendar.getMonthData(this.year, this.month);
        const { date } = this.state;
        const selectDay = calendar.areEqual(date, selectedDate)
        console.log(selectedDate)
        return(
            <>

                <div className={'selectedDate'} onClick={this.handleToggle}>{date && <p className={'dateShow'}>{selectDay}fdfsd</p>}</div>
                    <div className={cn(isActive?  'activeShow' : 'calendar')} >
                        <header className={'headDates'}>
                            <img className={'imgBtn'} onClick={this.handlePrevMonthButtonClick} src={prev}/>

                            &nbsp;

                            <select
                                className={'dropDown'}
                                ref={element => this.monthSelect = element}
                                value={this.month}
                                onChange={this.handleSelectChange}
                            >
                                {monthNames.map((name, index) =>
                                    <option key={name} value={index}>{name}</option>
                                )}
                            </select>

                            <select
                                className={'dropDown'}
                                ref={element => this.yearSelect = element}
                                value={this.year}
                                onChange={this.handleSelectChange}
                            >
                                {years.map(year =>
                                    <option key={year} value={year}>{year}</option>
                                )}
                            </select>

                            &nbsp;
                            <img className={'imgBtn'} onClick={this.handleNextMonthButtonClick} src={next}/>
                        </header>

                            <table className={'days'}>
                                <thead>
                                    <tr>
                                        {weekDayNames.map(name =>
                                            <th key={name}>{name}</th>
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
                                                onClick={() => this.handleDayClick(date)}
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


}

