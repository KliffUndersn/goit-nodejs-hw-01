const {
  addContact,
  removeContact,
  getContactById,
  listContacts,
} = require("./contactsOperations");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

(async () => {
  const { action, id, name, email, phone } = argv;

  switch (action) {
    case "list":
      const list = await listContacts();
      console.log(list);
      break;

    case "get":
      const contact = await getContactById(id);
      if (!contact) {
        console.log(`Contact ${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      if (!name || !email || !phone) {
        return console.log("Enter name email, phone");
      }
      await addContact(name, email, phone);
      console.log(`Contact ${name} with ${phone} added to contact list`);
      break;

    case "remove":
      const removeContactById = await removeContact(id);
      if (!removeContactById) {
        console.log(`Can't delete unexist contact`);
      }
      console.log(`Contact with id= ${id} deleted`);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
})();
