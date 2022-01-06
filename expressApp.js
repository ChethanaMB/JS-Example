const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Chethana");
});

app.get("/:a/:b", (req, res) =>{
    res.send(`Sum = ${parseInt(req.params.a)+parseInt(req.params.b)}`);
});

app.post('/meow', (req,res) => {
    let body = req.body;
    res.send(body.msg);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));