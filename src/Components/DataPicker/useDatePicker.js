import {useMemo, useState} from 'react'

export const useDatePicker = () => {
  const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNames1 = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    years = []
  let startYear = new Date().getFullYear();
  let date = new Date().toLocaleString('ru', {weekday: 'short'})

  const [currentDay] = useState(new Date())
  const [selectDay, setSelectDay] = useState(new Date())
  const [isActive, setIsActive] = useState(false)
  const [year, setYear] = useState(2021)
  const [month, setMonth] = useState(new Date().getMonth())
  const [day, setDay] = useState(new Date().getDate())
  const [dayName, setDayName] = useState(date)

  while (startYear <= 2030)
    years.push(startYear++)

  const createMonthArray = useMemo(() => {
    let i = 0, j = 0, week, out = [];
    let yearCreate = year, monthCreate = month;
    let first = new Date(yearCreate, monthCreate, 0).getDay();
    let days = new Date(yearCreate, monthCreate + 1, 0).getDate();
    while (i < days) {
      for (j = 0, week = Array(7); j < 7;) {
        while (j < first) week[j++] = 0;
        week[j++] = ++i > days ? 0 : i;
        first = 0;
      }
      out.push(week);
    }
    return out;
  }, [month, year])

  return {
    createMonthArray,
    weekDayNames,
    monthNames,
    monthNames1,
    years,
    startYear,
    currentDay,
    selectDay, setSelectDay,
    isActive, setIsActive,
    year, setYear,
    month, setMonth,
    day, setDay,
    dayName, setDayName
  }
}
