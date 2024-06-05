function ClockTime(){
  let showTime=  new Date().toLocaleString();
  return(
    <h3> This is the current date time: {showTime}</h3>    
  )
}
export default ClockTime;