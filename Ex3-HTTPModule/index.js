const http = require('http');
const fs = require('fs');
const path = require('path');



const hostname = 'localhost';
const port = 4000;
const server = http.createServer((req,res) =>
{
    console.log("Request for " + req.url + ' by method' + req.method);

    if(req.method == 'GET')
    {
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./Public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html')
        {
            fs.exists(filePath,(exists) =>
            {
                if (!exists)
                {
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error 404:File not found</h1></body></html>');
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }
        else
        {
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404: Not and HTML file</h1></body></html>');
            return;
        }
    }
    else
    {
        res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404: Not supported this method</h1></body></html>');
            return;
    }
  
})

server.listen(port,hostname,() =>
{
    console.log(`Server running at http://${hostname}:${port}`);
})