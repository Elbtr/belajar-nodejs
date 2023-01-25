




// console.log('Hello Sir');




// const nama = 'DDudu'
// const cetakNama = (nama) => `Hi My Nama Is ${nama}`
// console.log(cetakNama(nama));


// cara mengirim dua variabel ke dalam file lain

// function
// const cetakNama = (nama)=>`hi my Name is ${nama}`;

function cetakNama(nama){
    return `hallo nama saya ${nama}`
}

const PI = 3.14;

// module.exports.cetakNama=cetakNama;
// module.exports.PI = PI;

// object



const mhs = {
    nama:'Hasael',
    jurusan:'Ekonomi',
    umur:22,
    cetakMhs(){
        return `Halo, nama saya ${this.nama} dan saya berjurusan ${this.jurusan} dan umur saya ${this.umur} `
    }
}


// module.exports.mhs =  mhs;


class Orang {
    constructor(){
        console.log('object orang telah di buat');
    }
}

// module.exports.Orang =Orang;


// pemanggilan module jika memiliki banyak module


// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mhs: mhs,
//     Orang: Orang,
// };


// atau 
 
module.exports = {
    cetakNama,PI,mhs,Orang
}
