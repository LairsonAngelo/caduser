import express from 'express';
const app = express();

app.get('/',(rec,res) => {
    res.json({
        message: 'olá mundo'
    });
});


app.listen(3000);
