const listContacts = require("./listContacts");
const updateContact = require("./updateContact");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const newContactsList = contacts.filter(
    (contact) => contact.id !== Number(contactId)
  );
  if (!newContactsList) {
    return null;
  }
  await updateContact(newContactsList);
  return true;
};
module.exports = removeContact;
