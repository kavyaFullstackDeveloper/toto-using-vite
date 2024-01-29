const express = require("express");

const bodyparser = require("body-parser");

const cors = require("cors");

const app = express()

const port = 3005

app.use(cors())

app.use(bodyparser.json())


let products = [
    {id:1, name:'software engineer'},
    {id:2, name:'data scientiest'},
    {id:3, name:'product manager'},
    {id: 4, name: 'Scientist'},
    {id:5, name: 'Pilot'}
]

app.get('/api/products', (req, res) => {
    res.json(products);
    });
    
    app.post('/api/products', (req, res) => {
    const newproduct= req.body;
    products.push(newproduct);
    res.status(201).send();
    });
    
    app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    
    products = products.map(product => {
    if (product.id === id) {
    return { ...product, ...updatedProduct };
    }
    return product;
    });
    
    res.status(200).send();
    });
    
    app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(product => product.id !== id);
    res.status(200).send();
    });
    
    app.listen(port, () => {
    console.log('Server is runnning');
    });

