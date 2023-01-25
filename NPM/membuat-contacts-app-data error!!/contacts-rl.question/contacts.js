// core module
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


// membuat direction dan file JSON

const dirPath='./data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

const dataPath ='./data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]','utf-8');
};

// membuat question

const tulisPertanyaan = (question)=>{
        return new Promise((resolve, reject)=>{
            rl.question(question,(repeat)=>{
                resolve(repeat);
            });
        });
    };

const simpanContact = (nama, email, noHp) =>{
    const contact = {nama, email, noHp};
    const fileBuffer= fs.readFileSync('data/contacts.json', 'utf-8');        
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);
    
    // agar nama tdak sama
    const dupilkat = contacts.find((contact)=>contact.nama === nama);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('    TRIMAKASIH \nTelah memasukkan data anda');
    
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact};