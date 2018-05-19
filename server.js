//  OpenShift sample Node application
'use strict';

const Hapi=require('hapi');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";
// Create a server with a host and port
const server=Hapi.server({
    host:ip,
    port:port
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});
server.route({
    method:'GET',
    path:'/',
    handler:function(request,h) {

        return'hello from /';
    }
});
server.route({
    method:'GET',
    path:'/pagecount',
    handler:function(request,h) {

        return'hello from pagecount';
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
