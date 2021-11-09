const path = require("path");
const contactsPath = path.join(__dirname, "../db/contacts.json");
const contacts = require(contactsPath);

const listContacts = async () => {
  return contacts;
};

module.exports = listContacts;
