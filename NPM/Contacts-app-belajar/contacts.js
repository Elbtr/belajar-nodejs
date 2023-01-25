const fs = require('fs');

// membuat directory jika belum adas
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
// membuat file contacts JSAON jika belum ada

const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};


const loadContacts = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;

}

const simpanContacts = (nama, email, noHp) => {
    //  question yang sudah diisi akan dikirim ke json atau cara mengirim question ke dalam json

    const contact = { nama, email, noHp };

    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    // const contacts = JSON.parse(fileBuffer);
    // cek duplikat

    const contacts = loadContacts();



    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log('nama sudah digunakan, gunakan nama lain!');
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('    TRIMAKASIH \nTelah memasukkan data anda');
}


const listContact = () => {
    const contacts = loadContacts();
    console.log('Daftar kontak : ');
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}.${contact.nama} - ${contact.noHp}`);

    });
}
const toLower = (string)=>{
const abc = string.toLowerCase();
return abc
}

const detailContact = (nama) => {
    const contacts = loadContacts();
    const contact = contacts.find((contact) => toLower(contact.nama) === nama);

    if (!contact) {
        console.log(`${nama} Tidak ditemukan!`);
        return false;
    }
    console.log(`nama  : ${contact.nama}`);
    console.log(`No.Hp : ${contact.noHp}`);
    if (contact.email) {
        console.log(`email : ${contact.email}`);
    }
};

const deleteContact = (nama) => {
    const contacts = loadContacts();
    const newContacts = contacts.filter(
        (contact) => contact.nama !== nama
    );


    if (contacts.length === newContacts.length) {
        console.log(`           ${nama} Tidak di temukan`);
        return false;
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    console.log(`    data contact ${nama} Telah dihapus`);

};


module.exports = {
    simpanContacts, listContact, detailContact, deleteContact
}


