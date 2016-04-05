var Boom        = require('boom'),
    ObjectID    = require('mongodb').ObjectID;


module.exports = [
    {
        path: '/data/{collectionName}/count-items',
        method: 'POST',
        config: {
            handler: function (request, reply) {
                var collection  = request.params.collectionName,
                    Data        = request.server.plugins["hapi-mongo-models"].Data;
                Data._collection = collection;
                Data.countData(request.payload.query).then(function (count) {
                    reply({count: count});
                }).catch(function(err) {
                    reply(err).code(400);
                });

            }
        }
    }
];