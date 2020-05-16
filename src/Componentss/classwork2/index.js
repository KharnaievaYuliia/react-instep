import React from "react";
const Classwork2 = ({date}) => {
    const [time, setTime] = React.useState( date );
    setInterval(() =>{
    setTime( new Date() );
    },1000);
return(
    <p>{time.toString()}</p>
)
}
export default Classwork2