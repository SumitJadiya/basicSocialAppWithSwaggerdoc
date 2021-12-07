const express = require("express");
const format = require("date-format")
const app = express()

// Swagger related docs
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = YAML.load('./swagger.yaml')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello from LCO</h1>")
})

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "hitestchoudharyOfficial",
        followers : 66,
        follows: 70,
        date: format.asString("dd/MM - hh:mm:ss", new Date())
    }

    res.status(200).send(instaSocial)
})

app.get("/api/v1/facebook", (req, res) => {
    const fbSocial = {
        username: "hitestchoudharyOfficialfb",
        followers : 56,
        follows: 30,
        date: format.asString("dd/MM - hh:mm:ss", new Date())
    }

    res.status(200).send(fbSocial)
})

app.get("/api/v1/:token", (req, res) => {
    const token = req.params.token
    res.status(200).send({"params" : token})
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})