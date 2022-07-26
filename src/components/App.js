import React, { useState ,useEffect} from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {v4 as uuidv4} from 'uuid';
import ContactDetail from "./ContactDetail";

function App(){

    //how to render a list in react (we will create a array)
    
    const LOCAL_STORAGE_KEY = "contacts";
    
    const [contacts,setContacts] = useState([]);
    let id  = uuidv4()
    const addContactHandler=(contact)=>{
        setContacts([...contacts, {id : id, ...contact}]);
    }; 
    
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;//doubt
        });

        setContacts(newContactList);
    }

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveContacts) setContacts(retriveContacts);
    },[]);
    
    useEffect(()=>{
        console.log('------')
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]);
   
    return (
        <div className="ui container">
            <Router>
                    < Header />
                    <Switch>
                        <Route path="/add" exact render = {(props) =>(<AddContact {...props} addContactHandler={addContactHandler} /> )} />
                        <Route path="/" exact render = {(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} /> )} />
                        <Route path="/contact/:id" component={ContactDetail} />
                    </Switch>
                {/* <AddContact addContactHandler={addContactHandler} />,
                <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
            </Router>
        </div>
    );
}

export default App;