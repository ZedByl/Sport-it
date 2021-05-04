import React from "react";
import _ from 'lodash'
import style from "./Food.module.scss"
import useFood from "./useFood";
import BreakFast from "./Components/BreakFast";
import Dinner from "./Components/Dinner";
import Supper from "./Components/Supper";
import Other from "./Components/Other";

const FoodNote = () => {
  const { foodHeader } = useFood()
  return (
      <div className={ style.main }>
        <div className={ style.header }>
          { _.map(foodHeader, (route) =>
            <div className={ style.items } key={ route.id }>
              { route.img }
              { route.name }
            </div>
          )}
        </div>
        <div className={ style.content }>
          <table className={ style.table }>
            <BreakFast/>
            <Dinner/>
            <Supper/>
            <Other/>
          </table>
        </div>
      </div>
  );
}
export default FoodNote
