import { Hono } from "hono";

const route = new Hono();

type product = {
  id: string;
  name: string;
};

const product: product[] = [
  { id: "1", name: "product 1" },
  { id: "2", name: "product 2" },
];

route.get("/", (c) => {
  return c.json({
    message: "products retrieved successfully",
    data: { product },
  });
});

route.get("/:id", (c) => {
  const prodId: string = c.req.param("id");
  return c.json({
    message: "products retrieved successfully",
    data: { product_id: product.find((p) => p.id === prodId) },
  });
});
route.post("/", (c) => {
  const product_name = c.req.query("name");

  const new_product: product = {
    id: Date.now().toString(),
    name: String(product_name),
  };
  product.push(new_product);
  return c.json({
    message: "product saved successfully",
    data: new_product,
  });
});

route.delete("/:id",(c)=>{
    const product_id= c.req.param("id")

const product_exists= product.find((id)=>id.id===product_id);

     if(!product_exists){
        return c.text(" product with provided Id doesn't exists",404);
     }

    product.splice(product.findIndex(p=>p.id===c.req.param("id")),1)

    return c.text("product deleted successfully")
})

route.patch("/:id",async (c)=>{
    const product_id= c.req.param("id")

    const body:any=  await c.req.json();
    

     const product_exists= product.find((id)=>id.id===product_id);

     if(!product_exists){
        return c.text(" product with provided Id doesn't exists",404);
     }
  

      if(!body){
        return c.text("product name is required",400);
        
      }

      product_exists.name=body.product_name;
      

    return  c.json({
        message:"product updated successfully",
        data:product_exists
    })

})
export default route;
