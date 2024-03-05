import React from "react";

function Props(props){
    const {per} = props;
    const {name,age} = per;
    return (
        <>
    <h1>{name} {age}</h1>
    {props.children}
    </>
    );
}
export default Props;