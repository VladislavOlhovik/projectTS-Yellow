import React from "react"
import { ClockViewPropsType } from "./Clock"

export const zero = (num:number) => num<10?'0'+num:num


export const DigitalClockView: React.FC<ClockViewPropsType> = ({data}) => {
    return <>
    <span>{zero(data.getHours())}</span>:
    <span>{zero(data.getMinutes())}</span>:
    <span>{zero(data.getSeconds())}</span>
  </>
  }
