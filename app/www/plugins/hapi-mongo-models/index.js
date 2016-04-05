var Path = require('path');
var BaseModel = require('./base-model');


exports.register = function (server, options, next) {
    "use strict";

    var models = options.models || {};
    var mongodb = options.mongodb;
    var autoIndex = options.hasOwnProperty('autoIndex') ? options.autoIndex : true;

    Object.keys(models).forEach(function (key) {

        models[key] = require("../../models" + models[key]);
    });

    BaseModel.connect(mongodb, function (err, db) {

        if (err) {
            server.log('Error connecting to MongoDB via BaseModel.');
            return next(err);
        }

        Object.keys(models).forEach(function (key) {

            if (autoIndex) {
                models[key].ensureIndexes();
            }

            server.expose(key, models[key]);
        });

        server.expose('BaseModel', BaseModel);

        next();
    });
};


exports.BaseModel = BaseModel;


exports.register.attributes = {
    name: 'hapi-mongo-models'
};