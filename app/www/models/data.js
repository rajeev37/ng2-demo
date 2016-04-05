var  BaseModel   = require('../plugins/hapi-mongo-models').BaseModel,
    ObjectAssign = require('object-assign');

var Data = BaseModel.extend({
    constructor: function(attrs) {
        ObjectAssign(this, attrs);
    }
});
Data.create = function (data, geoData) {
    'use strict';
    var self = this;
    return new Promise(function (resolve, reject) {

        self.insert(user, function (err, res) {
            if (err) {
                return reject(err);
            }
            resolve(res.ops[0]);
        });
    });
};
module.exports = Data;