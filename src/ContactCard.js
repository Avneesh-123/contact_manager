import React from "react";
import {Link} from "react-router-dom";
// import ContactList from "./components/ContactList";
// import user from "../src/images/contactlogo";

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return (
        <div className="item">
        <div className="content">
            <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link>
        </div>
        <i 
            className="trash alternate outline icon"
            style={{color :"red", marginTop: "7px", alignItems: "center"}} 
            onClick={() => props.clickHander(id) }
            ></i>
    </div>
    );
};

export default ContactCard;