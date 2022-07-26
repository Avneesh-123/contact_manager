import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function PrintMyName(props){
    return <h1>My Name is{props.name} is of {props.age} years</h1>
}

function PrintMyNames(){
    return(
        <>
            <PrintMyName name = "jasbir" age={25}></PrintMyName>
            <PrintMyName name = "rajnesh" age={26}></PrintMyName>
            <PrintMyName name = "jitender" age={22}></PrintMyName>
        </>
    )
}
ReactDOM.render(
    <PrintMyNames></PrintMyNames>
    ,
    document.getElementById('root')
)