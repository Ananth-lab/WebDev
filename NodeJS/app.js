const http = require("http");
const ourServer = http.createServer((req,res) =>{
    // console.log(req.url, req.method, req.headers);
    //process.exit()
    const url = req.url;
    if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><form action = "/message" method ="POST"><input type = "text" name = "message"><button type = "submit">Submit</button></form></body>')
        res.write("</html>")
        return res.end()
    }
    else if(url === "/home"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1>Welcome home</h1></body>')
        res.write("</html>")
        res.end()
    }

    else if(url === "/about"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1> Welcome to About Us page</h1></body>')
        res.write("</html>")
        res.end()
    }
    else if(url === "/node"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title> My first page</title></head>")
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write("</html>")
        res.end()
    }
    

    res.setHeader("Content-Type", "text/html");
    res.write("<html>")
    res.write("<head><title> My first page</title></head>")
    res.write('<body><h1>Good to see you in ELSE case</h1></body>')
    res.write("</html>")
    res.end()
})

ourServer.listen(4000); 