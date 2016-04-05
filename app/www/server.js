var Glue     = require('glue'),
    manifest = require('./manifest'),
    Path = require('path'),
    Config   = require('config');

var options = {relativeTo: Path.join(__dirname)};
Glue.compose(manifest, options, function (err, server) {
    if (err) {
        throw err;
    }
    server.route({
        path: '/{path*}',
        method: 'GET',
        handler: function(request, reply) {
            reply.view('index');
        }
    });

    server.start(function (err) {
        console.log('server start at: ', Config.server.url);
    });
});