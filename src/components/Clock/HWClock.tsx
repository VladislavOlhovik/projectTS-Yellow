import React, { useEffect, useState } from "react"
import { AnalogClock } from "./analogClock/AnalogClock";
type PropsType = {
  mode:boolean
}
const zero = (num:number) => num<10?'0'+num:num

const HWClock:React.FC<PropsType> = (props) => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("tick");
      setData(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {props.mode ? (
        <div>
          <span>{zero(data.getHours())}</span>:
          <span>{zero(data.getMinutes())}</span>:
          <span>{zero(data.getSeconds())}</span>
        </div>
      ) : (
        <AnalogClock />
      )}
    </>
  );
};
export default HWClock