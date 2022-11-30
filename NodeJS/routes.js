const fs = require("fs");
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        fs.readFile("message.txt", { encoding: 'utf-8' }, (err, data) => {
            if(err){
                console.log(err)
            }
            res.write("<html>")
            res.write("<head><title> Enter message</title></head>")
            res.write(`<body>${data}</body>`)
            res.write('<body><form action = "/message" method ="POST"><input type = "text" name = "message"><button type = "submit">Submit</button></form></body>')
            res.write("</html>")
            return res.end()
        })
    }

    else if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[0];
            fs.writeFile("message.txt", message, (err) => {
                if (err) {
                    console.log(err)
                }
                res.statusCode = 302;
                res.setHeader("Location", '/');
                return res.end()
            })
        })
    
    }
    else if (url === "/home") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1>Welcome home</h1></body>')
        res.write("</html>")
        return res.end()
    }
    
    else if (url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1> Welcome to About Us page</h1></body>')
        res.write("</html>")
        return res.end()
    }
    else if (url === "/node") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write("</html>")
        return res.end()
    }
    else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1>Ops</h1></body>')
        res.write("</html>")
        return res.end()
    }
};

module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     sometext : "Hi"
// }

// module.exports.handler = requestHandler;
// module.exports.sometext = "Hi"

// exports.handler = requestHandler;
// exports.sometext = "Hi"





