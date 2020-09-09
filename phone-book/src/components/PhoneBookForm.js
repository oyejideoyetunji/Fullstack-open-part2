import React from "react";

const PhoneBookForm = ({ contacts, setContacts, contact, setContact }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let existingContact = contacts.find((element) => {
      return element.name === contact.name || element.number === contact.number;
    });
    if (existingContact !== undefined) {
      alert(
        `The contact ${contact.name} with number ${contact.number} already exists`
      );
      return;
    }
    setContacts([...contacts, contact]);
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
