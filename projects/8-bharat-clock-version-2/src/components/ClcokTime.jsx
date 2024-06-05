import { useEffect, useState } from "react";

function ClockTime() {
  //let showTime = new Date().toLocaleString();

  const [timing, setTiming] = useState(new Date());

  useEffect(() => {
    console.log("set the interval");
    const intervalId = setInterval(() => {
      setTiming(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancel the interval");
    };
  }, []);

  return (
    <h3>
      This is the current date time: {timing.toLocaleDateString()} -
      {timing.toLocaleTimeString()}
    </h3>
  );
}
export default ClockTime;
