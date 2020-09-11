import React, { useState, useEffect } from "react";
import { getAll, deleteObject } from "./services/persons";

import PhoneBookFilter from "./components/PhoneBookFilter";
import PhoneBookForm from "./components/PhoneBookForm";
import Contacts from "./components/Contacts";
import StatusDisplay from "./components/StatusDisplay";

function App() {
  let [contacts, setContacts] = useState([]);
  let [contact, setContact] = useState({ name: "", number: "" });
  let [filterValue, setFilterValue] = useState("");
  let [statusData, setStatusData] = useState(null);

  useEffect(() => {
    getAll().then((response) => {
      setContacts(response.data);
    });
  }, []);

  const getContactsToShow = () => {
    if (filterValue === "") return contacts;
    let formatedFilterValue = filterValue.toUpperCase();
    return contacts.filter((contact) => {
      return (
        contact.name.toUpperCase().includes(formatedFilterValue) ||
        contact.number.includes(formatedFilterValue)
      );
    });
  };

  const handleContactDelete = ({ name, id }) => {
    let shouldDelete = window.confirm(`delete ${name} from contacts?`);
    if (shouldDelete) {
      return deleteObject(id).then(() => {
        setContacts(contacts.filter((contact) => contact.id !== id));
        setStatusData({
          text: `${name} deleted successfully`,
          type: "success",
        });
        setTimeout(() => {
          setStatusData(null);
        }, 2000);
      });
    } else {
      return;
    }
  };

  return (
    <main>
      <h1>Phone Book</h1>
      <PhoneBookFilter
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <StatusDisplay statusData={statusData} />
      <PhoneBookForm
        contacts={contacts}
        setContacts={setContacts}
        contact={contact}
        setContact={setContact}
        setStatusData={setStatusData}
      />
      <Contacts
        contactsToShow={getContactsToShow()}
        filterValue={filterValue}
        handleContactDelete={handleContactDelete}
      />
    </main>
  );
}

export default App;
