var Config  = require('config'),
    User    = require('../models/user'),
    Boom    = require('boom'),
    Path    = require('path');

module.exports = [
    {
        path: '/user/save',
        method: 'GET',
        handler: function (request, reply) {
            'use strict';
            var User = request.server.plugins["hapi-mongo-models"].User;
            console.log('user', User);
            User.create({name: ' new user'}).then(function(data) {
                console.log('data', data);
                reply(data);
            }).catch(function(err) {
                console.log('error', err);
                reply(err);
            });
        }
    }
];