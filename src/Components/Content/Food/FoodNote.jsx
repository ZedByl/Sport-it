import React from "react";
import Food from "./Food.module.scss"
import useFood from "./useFood";
import _ from 'lodash'



 const FoodNote = () => {
    const {foodHeader, foodContent,aa} = useFood()

    return (
        <>
            <div className={Food.header}>
                {_.map(foodHeader, (route) =>
                    <div className={Food.test} key={route.id}>
                        {route.img}
                        {route.name}
                    </div>
                )}
            </div>
            <div className={Food.content}>
                {_.map(foodContent, (route) =>
                    <table style={{width: '100%'}}>
                            {route.caption}

                           {!aa ? route.tr : route.trData}
                    </table>
                )}

            </div>
        </>
    );
}
export default FoodNote