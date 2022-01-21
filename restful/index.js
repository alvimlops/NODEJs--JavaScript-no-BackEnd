const http = require('http');

let server = http.createServer((req, res) =>{
 console.log('URL:', req.url);
 console.log('METHOD:', req.method);

   switch (req.url){
       case '/':

       res.statusCode = 200;
       res.setHeader('content-Type', 'text/html');
       res.end('<h1>ola</h1>');

       break;

       res.statusCode = 200;
       res.setHeader('content-Type', 'application/json');
       res.end(JSON.stringify({
           users:[{
               name:'Alvim',
               email: 'alvim.lopez@gmail.com',
               id:1
           }]
        }));
   }
});

server.listen(3001, '127.0.0.1', ()=>{
    console.log('servidor rodando!');
});