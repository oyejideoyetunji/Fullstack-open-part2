import React from "react";

const Contacts = ({ contactsToShow, filterValue }) => {
  return (
    <section>
      <h2>Contacts</h2>
      {contactsToShow.length < 1 ? (
        filterValue === "" ? (
          <p>Your Phone book is empty, please add contacts.</p>
        ) : (
          <p>No contact is matching your search</p>
        )
      ) : (
        contactsToShow.map((contact) => (
          <p key={contact.name}>
            <i>Name : {contact.name} </i>{" "}
            <span> | Number : {contact.number}</span>
          </p>
        ))
      )}
    </section>
  );
};

export default Contacts;
