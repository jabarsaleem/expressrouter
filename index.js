const express= require('express'),
http=require('http');

const hostname='localhost';

const port=3000;

const app= express();

const bodyparer= require('body-parser');

app.use(bodyparer.json());

app.all('/studnet',(req,res,next)=>{
    req.statusCode=200;
    req.seetheader('content-type','text.html');
    next();

});

app.get('/students',(req,res,next)=>
{
res.end('will send details of all studnets');
}
);

app.put('/students',(req,res,next)=>{
res.statusCode=403;
res.end('Can not edit all students');
});

app.post('/students',(req,res,next)=>{
    res.end("will add one student"+ req.body.name +"and also its details"+ req.body.details);
}
);
app.delete('/students',(req,res,next)=>{

    res.end("will delete all students's data");
});


app.get('/students/:studentid',(req,res,next)=>{
    res.end("will show you the student details"+ req.params.studentid);
});

app.delete('/students/:studentid', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.studentid);
});



app.post('/students/:studnetid', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /students/'+ req.params.studentId);
  });




app.put('/students/:studentid', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.studentid + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.details);
  });
  
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });



