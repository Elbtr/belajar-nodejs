// const fs = require('fs');
// core module



// const moment =require('moment');//Third Party Module/npm Module/node_Modules

// console.log('Hello World');


// Catatan javascript
// node.js itu menganut suatu modul sistem 


// const cetakNama = require(`./coba`); //local module
// console.log(cetakNama('Hasael'));


// agar file nya bisa di terima kita harus menyatakan dulu file ke variabel

const coba = require(`./coba`);

console.log(
    coba.cetakNama('Hasael Butar Butar'), 
    coba.PI, 
    coba.mhs.cetakMhs(), 
    new coba.Orang()
);