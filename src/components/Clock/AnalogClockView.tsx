import React from "react"
import { ClockViewPropsType } from "./Clock"
import style from './AnalogClockView.module.css'



export const AnalogClockView: React.FC<ClockViewPropsType> = ({data}) => {
    const secondsStyle = {
      transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${data.getHours() * 30}deg)`
    };
    return <div className={style.clock}>
    <div className={style['analog-clock']}>
      <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
      <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
      <div className={`${style.dial} ${style.hours}`} style={hoursStyle} />
    </div>
  </div>
  }