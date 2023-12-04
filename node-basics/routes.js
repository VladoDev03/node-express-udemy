const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Enter</button></form>');
        res.write('</html></body>');

        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            console.log(parsedBody);

            // fs.writeFileSync('message.txt', message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');

                return res.end();
            });

            // res.writeHead(302, {});
        });
    }

    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello, World!</h1>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';