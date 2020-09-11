import React from "react";

const Contacts = ({ contactsToShow, filterValue, handleContactDelete }) => {
  return (
    <section>
      <h2>Contacts</h2>
      {contactsToShow.length < 1 ? (
        filterValue === "" ? (
          <em>Your Phone book is empty, please add contacts.</em>
        ) : (
          <em>No contact is matching your search</em>
        )
      ) : (
        contactsToShow.map((contact) => (
          <p key={contact.id}>
            <i>Name : {contact.name} </i>{" "}
            <span> | Number : {contact.number} </span>{" "}
            <button onClick={() => handleContactDelete(contact)}>DELETE</button>
          </p>
        ))
      )}
    </section>
  );
};

export default Contacts;
