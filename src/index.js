var mongodbRest = require('mongodb-rest/server.js');

mongodbRest.startServer(
    {
        "db": {
            "port": process.env.MONGODB_1_PORT_27017_TCP_PORT || 27017,
            "host": process.env.MONGODB_1_PORT_27017_TCP_ADDR || "localhost"
        }
    }
);