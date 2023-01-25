const fs = require('fs');
const loadContacts = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}


const deleteContact = (nama) => {
    const contacts = loadContacts();
    const newContact = contacts.filter(
        (contact) => contact.nama !== nama
    );


    if (contacts.length === newContact.length) {
        console.log(`${nama} tidak di temukan`);
        return false;
    }
    console.log(newContact);
};

console.log(deleteContact('hasael'))
