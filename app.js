const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./dbConfig");
const { Request } = require("tedious");
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*"}));


app.get('/', (req, res) => {
    res.send("Hello world!!!");
});

app.get('/getTenthQuery', (req, res) => {
    let query = "Select time, place, latitude, longitude  from eq where mag > 3.14 and mag < 3.24";
    const request = new Request(query, (err, rowCount) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log(`Number of rows returned ${rowCount}`);
        }
    });
    let rows = [];
    request.on("row",(columns) => {
        rows.push(columns);
    })
    request.on('doneInProc', (rowCount, more) => {
        res.send(rows);
    });
    connection.execSql(request);
});

app.get('/getEleventhQuery', (req, res) => {
    let query = "Select time, place, latitude, longitude  from eq where mag > 3.14 and mag < 3.24";
    const request = new Request(query, (err, rowCount) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log(`Number of rows returned ${rowCount}`);
        }
    });
    let rows = [];
    request.on("row",(columns) => {
        rows.push(columns);
    })
    request.on('doneInProc', (rowCount, more) => {
        res.send(rows);
    });
    connection.execSql(request);
});

app.get('/getTwelthQuery', (req, res) => {
    let query = "Select time, place, latitude, longitude  from eq where mag > 3.14 and mag < 3.24Select time, place, latitude, longitude  from eq where mag > 3.14 and mag < 3.24 and place LIKE '%CA%'";
    const request = new Request(query, (err, rowCount) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log(`Number of rows returned ${rowCount}`);
        }
    });
    let rows = [];
    request.on("row",(columns) => {
        rows.push(columns);
    })
    request.on('doneInProc', (rowCount, more) => {
        res.send(rows);
    });
    connection.execSql(request);
});

app.get('/getThirteenthQuery', (req, res) => {
    let query = "Select time, place, latitude, longitude  from eq where mag > 3.14 and mag < 3.24";
    const request = new Request(query, (err, rowCount) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log(`Number of rows returned ${rowCount}`);
        }
    });
    let rows = [];
    request.on("row",(columns) => {
        rows.push(columns);
    })
    request.on('doneInProc', (rowCount, more) => {
        res.send(rows);
    });
    connection.execSql(request);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
