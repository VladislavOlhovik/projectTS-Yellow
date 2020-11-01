import React, { useEffect } from "react";
import s from "./AnalogClock.module.css";

export const AnalogClock = () => {
  const deg = 6;
  const hr = document.querySelector("#hr");
  const sc = document.querySelector("#sc");
    useEffect(()=>{
        let int = setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
            //@ts-ignore
            hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
            //@ts-ignore
            mn.style.transform = `rotateZ(${mm}deg)`;
            //@ts-ignore
            sc.style.transform = `rotateZ(${ss}deg)`;
          });
          return ()=>clearInterval(int)
    })
  

  return (
    <div className={s.body}>
      <div className={s.clock}>
        <div className={s.hour}>
          <div className={s.hr} id="hr"></div>
        </div>
        <div className={s.min}>
          <div className={s.mn} id="mn"></div>
        </div>
        <div className={s.sec}>
          <div className={s.sc} id="sc"></div>
        </div>
      </div>
    </div>
  );
};
