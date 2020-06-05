const express = require('express');
const app = express();
const join = require('path').join;

const PORT = process.env.PORT || 3000;

//app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send('g');
});


app.listen(PORT, ()=>{
    console.log('server is open at ' + PORT);
});