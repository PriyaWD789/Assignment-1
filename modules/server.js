    //  TASK-3 

import http from 'http'
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.end('<h1> Hi, Welcome to Backend Development</h1>')
    }
    else if(req.url==='/about' && req.method==='GET'){
        res.end('<h1> This is about page.</h1>')

    }
    else if(req.url==='/contact' && req.method==='GET'){
        res.end('<h1> This is Contact Page</h1>')
    }

    else{
        res.end(JSON.stringify({
            message:"404 Not Found, Invalid Route"
        }))
    }


})




const port= 3000;
server.listen(port,()=>{
    console.log("Server started at the",port)
})