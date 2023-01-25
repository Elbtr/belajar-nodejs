const http = require('http');
const fs = require('fs');

// untuk mau langsung liat dokumen tasi nya langsung aja buka web nya https://nodejs.org/en/
const port = 3000;

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const url = req.url;
        if (url === '/about') {
            res.write('<h1>InI Adalah Halaman About</h1>')
        } else if (url === '/contact') {
            res.write('<h1>InI Adalah Halaman Contact</h1>')
        } else {
            fs.readFile('./index.html', (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write('Error: file Not Found')
                } else {
                    res.write(data)
                }
                res.end();
            });

        }

    })
    .listen(port, () => {
        console.log(`Server is listening on port
         ${port}..`);
    })