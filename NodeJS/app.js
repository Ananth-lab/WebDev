const http = require("http");
const ourServer = http.createServer((req,res) =>{
    console.log("Ananth")
})

ourServer.listen(4000);