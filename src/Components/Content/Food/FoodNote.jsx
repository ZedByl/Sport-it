import React from "react";
import style from "./Food.module.scss"
import useFood from "./useFood";
import _ from 'lodash'
import NavBar from "../../Navbar/NavBar";


const FoodNote = () => {
    const {foodHeader, foodContent, aa} = useFood()
    return (
        <>
            <div className={style.main}>
                <div className={style.Nav}>
                    <NavBar/>
                </div>
                <div className={style.Content}>
                    <div className={style.header}>
                        {_.map(foodHeader, (route) =>
                            <div className={style.test} key={route.id}>
                                {route.img}
                                {route.name}
                            </div>
                        )}
                    </div>
                    <div className={style.content}>
                        {_.map(foodContent, (route) =>
                            <table style={{width: '100%'}} key={route.id}>
                                {route.caption}
                                <tbody>
                                {!aa ? route.tr : route.trData}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default FoodNote