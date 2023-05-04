import "./App.css";
import { useState, useEffect } from "react";
import ContactCard from "./Components/ContactCard";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <div className="App">
      <h2>My AddressBook </h2>

      {contacts.map((contact) => {
        return (
          <ContactCard contact={contact}/>
        );
      })}
    </div>
  );
}

export default App;
