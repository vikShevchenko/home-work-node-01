const contacts = require('./db/contacts')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const invokeAction = async ({ action, id, name, email, phone }) => {

    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts()
            return console.log(allContacts)

        case 'get':
            const oneContact = await contacts.getContactById(id)
            return console.log(oneContact)

        case 'add':
            const newContact = await contacts.addContact({ name, email, phone })
            return console.log(newContact)

        case 'remove':
            const deleteById = await contacts.removeContact(id)
            console.log(deleteById)
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

const arr = hideBin(process.argv)
const { argv } = yargs(arr)

invokeAction(argv)