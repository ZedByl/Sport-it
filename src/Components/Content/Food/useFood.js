import React from 'react'
import DataPicker1 from "../../DataPicker/DatePicker";
import date from "./../img/date.svg"
import tarelka from "./../img/tarelka.svg"
import stonks from "./../img/stonks.svg"
import Food from "./Food.module.scss";
import arrow from "../img/arrow.svg";

const useFood = () => {
  const emptyFood =
    <>
    <tbody>
    <tr className={ Food.cardBack }>
      <td className={ Food.cardBackText }>Никакие продукты ещё не были добавлены</td>
      <td>
        <img className={ Food.cardBackImg } src={ arrow } alt="arrow"/>
      </td>
    </tr>
    </tbody>
    </>

  const foodHeader = [
    {
      id: 1,
      name: <div className={ Food.text }><DataPicker1/></div>,
      img: <img className={ Food.img } src={ date } alt="date"/>,
    },
    {
      id: 2,
      name: <p className={ Food.text }>0 калл</p>,
      img: <img className={ Food.img } src={ tarelka } alt="tarelka"/>,
    },
    {
      id: 3,
      name: <p className={ Food.text }>120 ru</p>,
      img: <img className={ Food.img } src={ stonks } alt="stonks"/>,
    }
  ]

  return { foodHeader, emptyFood }
}

export default useFood
