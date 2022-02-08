const http = require('http')

 const server = http.createServer((req,res) => {
  //  res.write("this is server 5000");

  if(req.url==="/"){
       res.end("this is Home page");
  }

  if(req.url="/about"){
      res.end("this is about page")
  }

  res.end(`
  <h1>Opps page not fount</>
  <p>go back to home page<a href="/">home</a></p>
  `)
  

})

server.listen(5000)