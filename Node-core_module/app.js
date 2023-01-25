// Core Modules
// File System


const fs = require("fs");
const { url } = require("inspector");


// menuliskan string ke file (syncronous)

// fs.writeFileSync('test.txt', 'Hello world Secara Synchronous!');

// penulisan error
// try{

//     fs.writeFileSync('doc/test.txt', 'Hello world Secara Synchronous!');
// }catch(e){
//     console.log(e);
// }

// error karna utuk printah mencari document bukan menggunakan writeFileSync()


// menuliskan string ke file (asynchronous)

// fs.writeFile('doc/test.txt','hello world Asynchronous',(e) =>{
//     console.log(e);
// })



// membaca isi File (Synchronous)

// const data = fs.readFileSync('doc/test.txt','utf-8');

// console.log(data);

// membaca isi File (Asynchronous)

// fs.readFile('doc/test.txt','utf-8' ,(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// });


// Readline


const readline = require('readline');
const rl= readline.createInterface({ input: process.stdin, 
output: process.stdout
 });

rl.question('Masukkan nama anda:', (nama)=>{
    rl.question('Masukkan no.Hp Anda',(noHp)=>{
     const contacts={nama , noHp};
     const file = fs.readFileSync('contact.json','utf-8');
     const contact = JSON.parse(file); 
     // JSON sama seperti array 
     contact.push(contacts);
     // console.log(contact);
     fs.writeFileSync('contact.json',JSON.stringify(contact));
     console.log(`TRIMAKASIH telah mengisi Dokumen`);
     rl.close();
    })

});


