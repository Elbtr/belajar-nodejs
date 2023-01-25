
const contacts = require('./contacts.js');
// atau kita bisa menggunakan object distructuring Atau bisa juga disebut depecah
// const { tulisPertanyaan ,simpanContact } = require("./contacts");


const main = async ()=>{
    // Pertanyaan(question)
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email anda :');
    const noHp =await contacts.tulisPertanyaan('Masukkan no.Hp anda : ')


    contacts.simpanContact (nama, email, noHp);
};

main();