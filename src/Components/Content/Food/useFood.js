import React, {useState} from 'react'
import DataPicker1 from "../../DataPicker/DatePicker1";
import date from "./../img/date.svg"
import tarelka from "./../img/tarelka.svg"
import stonks from "./../img/stonks.svg"
import Food from "./Food.module.scss";
import breakfast from "../img/breakfast.svg";
import dinner from "../img/dinner.svg";
import supper from "../img/supper.svg";
import other from "../img/other.svg";
import arrow from "../img/arrow.svg";
import plus from "../img/plus.svg";


const useFood = () => {
    const [aa, AA] = useState(false)
    let trObj =  <tr className={Food.cardBack}>
        <p className={Food.cardBackText}>Никакие продукты ещё не были добавлины</p>
        <img className={Food.cardBackImg} src={arrow} alt="arrow"/>
    </tr>

    let imgObj = <img className={Food.plus} src={plus} alt="plus" onClick={() => AA(true)}/>

    const foodHeader = [
        {
            id: 1,
            name: <DataPicker1/>,
            img: <img className={Food.img} src={date} alt="date"/>,
        },
        {
            id: 2,
            name: <p className={Food.text}>0 калл</p>,
            img: <img className={Food.img} src={tarelka} alt="tarelka"/>,
        },
        {
            id: 3,
            name: <p className={Food.text}>120 ru</p>,
            img: <img className={Food.img} src={stonks} alt="stonks"/>,
        }
    ]
    const foodContent = [
        {
            id: 1,
            caption: <caption className={Food.card}>
                <img src={breakfast} alt="breakfast"/>
                <p className={Food.contentText}>Завтрак</p>
                {imgObj}
            </caption>,
            tr: trObj,
            trData: <tr className={Food.cardBack}>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>,
        },
        {
            id: 2,
            caption: <caption className={Food.card}>
                <img src={dinner} alt="dinner"/>
                <p className={Food.contentText}>Обед</p>
                {imgObj}
            </caption>,
            tr: trObj,
            trData: <tr className={Food.cardBack}>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>,
        },
        {
            id: 3,
            caption: <caption className={Food.card}>
                <img src={supper} alt="supper"/>
                <p className={Food.contentText}>Ужин</p>
                {imgObj}
            </caption>,
            tr: trObj,
            trData: <tr className={Food.cardBack}>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>,
        },
        {
            id: 4,
            caption: <caption className={Food.card}>
                <img src={other} alt="other"/>
                <p className={Food.contentText}>Перекус/Другое</p>
                {imgObj}
            </caption>,
            tr: trObj,
            trData: <tr className={Food.cardBack}>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>,
        },
    ]

    const foodContentBack = [
        {
            id: 1,
            name: <p className={Food.contentText}>Никакие продукты ещё не были добавлины</p>,
            img: <img src={arrow} alt="arrow"/>
        },
        {
            id: 2,
            name: <p className={Food.contentText}>Никакие продукты ещё не были добавлины</p>,
            img: <img src={arrow} alt="arrow"/>
        },
        {
            id: 3,
            name: <p className={Food.contentText}>Никакие продукты ещё не были добавлины</p>,
            img: <img src={arrow} alt="arrow"/>
        },
        {
            id: 4,
            name: <p className={Food.contentText}>Никакие продукты ещё не были добавлины</p>,
            img: <img src={arrow} alt="arrow"/>
        },

    ]
    return {
        foodHeader,
        foodContent,
        foodContentBack,
        aa
    }
}


export default useFood