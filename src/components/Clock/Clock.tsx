import React, { useEffect, useState } from "react"
import { AnalogClockView } from "./AnalogClockView";
import { DigitalClockView } from "./DigitalClockView";

type PropsType = {
  mode:'analog'|'digital'
}

const Clock:React.FC<PropsType> = (props) => {
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

  let view
  switch (props.mode) {
    case  "analog":
      view=<AnalogClockView data={data}/>
      break;
    case "digital":
    default:
      view = <DigitalClockView data={data}/>
  }
  return (
    <div>
      {view}
    </div>
  );
};
export default Clock

export type ClockViewPropsType = {
  data:Date
}


