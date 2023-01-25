const yargs = require('yargs');
const contacts = require('./contacts')
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContacts(argv.nama, argv.email, argv.noHP);
    }
}).demandCommand();


// menampilkan daftar semua nama & noHP contact

yargs.command({
    command: 'list',
    describe: 'Menampilkan daftar semua nama & noHP contact',
    handler() {
        contacts.listContact();
    }
});


// menampilkan detail sebuah kontak


yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkansebuah nama ',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
});

// menghapus contact

yargs.command({
    command: 'delete',
    describe: 'Menghapus Contact ',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
});


yargs.parse();

