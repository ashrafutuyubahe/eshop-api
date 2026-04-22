import {Hono } from "hono"


const app= new Hono();

app.get("/",(c)=>{
   return c.text("Hello from Hono")
})

// app.on(["DELETE","PATCH"],"/users",(c)=>{  // multiple http requests

//   return  c.json({"users":["kamali","jack"]})

// })
app.get("/health",(c)=>{
  return c.text("server is running fine!!!")
})


export default app
