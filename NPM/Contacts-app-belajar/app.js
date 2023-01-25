
// const {tulisPertanyaan,simpanContacts} = require('./contacts')

// const main = async ()=>{
//     // Pertanyaan(question)
//     const nama = await tulisPertanyaan('Masukkan nama anda : ');
//     const email = await tulisPertanyaan('Masukkan email anda :');
//     const noHp = await tulisPertanyaan('Masukkan no.Hp anda : ')

//     simpatPesan(nama,email,noHp);
    
// };

// main();


// // membuat question

// // 1.menggunakan rl.question

// rl.question('masukkan nama anda : ',(nama)=>{
//     rl.question('masukkan email anda : ', (email)=>{
//         const contact = {nama , email};
//         const fileBuffer= fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(fileBuffer);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//         rl.close();

//     })
// });


// // 2. menggunakan Promise

// // kita harus ubah dulu rl kedalam promise

// const pertanyaan1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question('Masukkan nama anda : ',(nama)=>{
//             resolve(nama);
//         });
//     });
// };
// const pertanyaan2 = ()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question('Masukkan email anda : ',(email)=>{
//             resolve(email);
//         });
//     });
// };

// const main = async ()=>{
//     const nama = await pertanyaan1();
//     const email = await pertanyaan2();
//     const contact = {nama , email};
//     const fileBuffer= fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(fileBuffer);
    
//     contacts.push(contact);
    
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//     console.log('    TRIMAKASIH \nTelah memasukkan data anda');
    
//     rl.close();
// };

// main();

// // Bahkan ini bisa dibuat dengan lebih singkat lagi 
// // dengan cara kita membuat pertayaan secara berulang ulang


// const tulisPertanyaan = (question)=>{
//         return new Promise((resolve, reject)=>{
//             rl.question(question,(repeat)=>{
//                 resolve(repeat);
//             });
//         });
//     };
    
//     const main = async ()=>{
//         // Pertanyaan(question)
//         const nama = await tulisPertanyaan('Masukkan nama anda : ');
//         const email = await tulisPertanyaan('Masukkan email anda :');


//         //  question yang sudah diisi akan dikirim ke json atau cara mengirim question ke dalam json
//         const contact = {nama , email};
//         const fileBuffer= fs.readFileSync('data/contacts.json', 'utf-8');        
//         const contacts = JSON.parse(fileBuffer);
//         contacts.push(contact);
        
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
//         console.log('    TRIMAKASIH \nTelah memasukkan data anda');
        
//         rl.close();
//     };
    
//     main();