import React from "react";

class Apple extends React.Component{
    render(){
        const {apple} = this.props;
        const {name} = apple;
        return (
            <>
            <p>Im Apple</p>
            <p>My Name is {name}</p>
            </>
        )
    }
}
export default Apple;