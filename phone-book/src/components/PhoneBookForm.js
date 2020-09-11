import React from "react";

import { create, update } from "../services/persons";

const PhoneBookForm = ({
  contacts,
  setContacts,
  contact,
  setContact,
  setStatusData,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let existingContact = contacts.find((element) => {
      return element.name === contact.name || element.number === contact.number;
    });
    if (existingContact !== undefined) {
      if (existingContact.number !== contact.number) {
        let shouldUpdate = window.confirm(
          `Your contact ${contact.name} already exists, update the old number to a new one?`
        );
        return shouldUpdate
          ? update(existingContact.id, contact)
              .then((response) => {
                setContacts(
                  contacts.map((contact) => {
                    return contact.id === response.data.id
                      ? response.data
                      : contact;
                  })
                );
                setStatusData({
                  text: `${response.data.name} updated successfully`,
                  type: "success",
                });
                setTimeout(() => {
                  setStatusData(null);
                }, 2000);
                setContact({ name: "", number: "" });
              })
              .catch((error) => {
                setStatusData({
                  text: `There was a problem updating ${contact.name} this contact might have been deleted already`,
                  type: "error",
                });
                setTimeout(() => {
                  setStatusData(null);
                }, 2000);
              })
          : null;
      }
      setStatusData({
        text: `A contact ${existingContact.name} with the number ${existingContact.number} already exists`,
        type: "error",
      });
      setTimeout(() => {
        setStatusData(null);
        return;
      }, 2000);
      return;
    }

    create(contact).then((response) => {
      setContacts(contacts.concat(response.data));
      setContact({ name: "", number: "" });
      setStatusData({
        text: `${response.data.name} added successfully`,
        type: "success",
      });
      setTimeout(() => {
        setStatusData(null);
      }, 2000);
      return;
    });
  };

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setContact({ ...contact, [name]: value });
  };

  return (
    <section>
      <h2>Add a new Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={contact.name}
            required
          />
        </div>
        <div>
          <label>Number: </label>
          <input
            type="tel"
            name="number"
            onChange={handleInputChange}
            value={contact.number}
            required
          />
        </div>
        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
    </section>
  );
};

export default PhoneBookForm;
