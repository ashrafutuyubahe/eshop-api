import {Hono} from "hono"

const route= new Hono();

const product:Record<string, string>={
    1:"product 1",
    2:"product 2",
    3:"product 3"
}






route.get("/",(c)=>{

    return c.json({
      message:"products retrieved successfully",
      data:{product}
    })
})

route.get("/:id",(c)=>{
    const prodId:string= c.req.param("id");
    return c.json({
      message:"products retrieved successfully",
      data:{product_id:product[prodId]}
    })
})
route.post("/",(c)=>{
    const product_name= c.req.query("name");
    

    product.push(product_name)
    return c.json({
        message:"product saved successfully",
        data:product
    })
})

export default route