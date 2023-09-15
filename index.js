var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optiosSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(_dirname+ '/views/index.html');
});

app.get("/api/hello", function(req, res){
    res.json({greeting: 'hello API'});
});

app.get('/api', (req, res)=>{
    res.json({
        unix: new Date().getTime(),
        utc: new Date(). toUTCString(),
    })
})

app.get('/api/:timestamp',(req,res)=>{
    const timestamp = req.params.timestamp;
    if(!isNaN(Number(timestamp)) && timestamp.length === 13 ){
        return res.json({
            unix: timestamp,
            utc:new Date(Number(timestamp)).toUTCString(),

        }

        );
    }
    if(new Date(timestamp).toUTCString() === 'Invalid Date'){
        return res.json({
            unix: new Date(timestamp).getTime(),
            utc: new Date(timestamp).toUTCString(),
        });
    }

    console.log(new Date(timestamp).toUTCString());
    res.json({error: 'Invalid Date'});
})

var listener = app.listen(3000, function() {
    console.log('your app is on listening on port'+ 3000);
})