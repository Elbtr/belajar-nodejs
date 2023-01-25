const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = 3000;



// menggunakan ejs

app.set('view engine', 'ejs');
app.use(expressLayouts);

// app.use( (req, res, next) => {
// console.log('Time : ', Date.now());

//     next();
// });
// 
app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname });
    const mhs = [
        {
            nama: 'Hasael',
            kelas: 'XII IPA 2'
        },
        {
            nama: 'vutar',
            kelas: 'XII IPA 2'
        },
        {
            nama: 'Butar',
            kelas: 'XII IPA 2'
        },
    ]
    res.render('index', {
        nama: 'Hasael BUtar BUtar',
        title: 'Halaman Home',
        mhs,
        
    });
});


app.get('/about', (req, res) => {

    // res.sendFile('./about.html', { root: __dirname });
    res.render('about', {
        layout:'layouts/main-layouts',
        title: 'Halaman about',
    });
});
// app.use( (req, res, next) => {
//     console.log("Ini adalah middleware ke-2");
    
//         next();
//     });

app.get('/contact', (req, res) => {
    // res.sendFile('./contact.html', { root: __dirname });
    res.render('contact',{
        layout:'layouts/main-layouts',
        title: 'Halaman contact',
    });
});


app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category  : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});