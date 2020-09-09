import React, { useState } from "react";

import PhoneBookFilter from "./components/PhoneBookFilter";
import PhoneBookForm from "./components/PhoneBookForm";
import Contacts from "./components/Contacts";

function App() {
  let [contacts, setContacts] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  let [contact, setContact] = useState({ name: "", number: "" });
  let [filterValue, setFilterValue] = useState("");

  const getContactsToShow = () => {
    if (filterValue === "") return contacts;
    let formatedFilterValue = filterValue.toUpperCase();
    return contacts.filter((contact) => {
      return contact.name.toUpperCase().includes(formatedFilterValue);
    });
  };

  return (
    <main>
      <h1>Phone Book</h1>
      <PhoneBookFilter
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <PhoneBookForm
        contacts={contacts}
        setContacts={setContacts}
        contact={contact}
        setContact={setContact}
      />
      <Contacts
        contactsToShow={getContactsToShow()}
        filterValue={filterValue}
      />
    </main>
  );
}

export default App;
