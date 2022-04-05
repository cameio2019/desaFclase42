import express from "express";
const app = express()
const server = app.listen(8080,()=>console.log("Listening...."))

app.get('/testget',(req,res)=>{
    console.log(req.query)
    res.send('Obtenido')
})

app.post(('/testget',(req,res)=>{
    console.log(req.body)
    res.send('Obtenido')
}))