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
    res.end("will show you the student details"+ req.param.studentid);
});

app.delete('/stduents/:studentid',(req,res,next)=>{
res.end("will delete this student" + req.param.studentid);
});


app.post('/students/:/studentid',(req,res,next)=>{

res.statusCode=403;
res.end("post request is invaild");
});

app.put('/students/:studnetid',(req,res,next)=>{

    res.write('udpating the details of studnet with '+ req.param.studentid)+'\n';
   res.end("will update the data of studnet with student name "+ req.body.name+ " and also update the studnet's detials" + req.body.details); 
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });



