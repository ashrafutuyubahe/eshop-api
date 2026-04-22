import {Hono } from "hono"
import route from "./routes/product.route";


const app= new Hono();

app.get("/",(c)=>{
   return c.text("Hello from Hono")
})

// app.on(["DELETE","PATCH"],"/users",(c)=>{  // multiple http requests

//   return  c.json({"users":["kamali","jack"]})

// })

app.get("/users/:id",(con)=>{
  const user_id= con.req.param("id");
  //  return con.res.json({"user_id":user_id});

  return con.json({"user_id":user_id})

})
app.get("/health",(c)=>{
  return c.text("server is running fine!!!")
})



app.route("/products",route)
export default app
