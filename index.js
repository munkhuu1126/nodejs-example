const http = require('http');
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if (req.url === '/') {

    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content)
    //         })
    // }
    // if (req.url === '/about') {

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content)
    //         })
    // }
    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 15 },
    //         { name: 'John Doe', age: 26 }
    //     ]
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    // ! Build file path
    let filePath = path.join(__dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url)
    let extname = path.extname(filePath)
    // ! Initial content type
    let contentType = 'text/html'
    
    // ! Check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript' //etc
    }
})

const PORT = process.env.PORT || 5001

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))