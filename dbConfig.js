const { Connection, Request } = require('tedious');

const config = {
    authentication: {
        options: {
            userName: "sqluser",
            password: "Xmzz8b8tyFDR$Rg"
        },
        type: "default"
    },
    server: "adb-student.database.windows.net",
    options: {
        database: "Assignment1",
        encrypt: true
    }
}


const db_connection = new Connection(config);

db_connection.on("connect", err => {
    if(err){
        console.error(err.message);
    } else {
        console.log("Connection sucessful");
    }
});

db_connection.connect();

module.exports = db_connection;