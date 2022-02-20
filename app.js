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

app.get('/getFirstThousandRecords', (req, res) => {
    let query = "SELECT TOP (10) * FROM all_month";
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


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
