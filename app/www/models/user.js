var  BaseModel   = require('../plugins/hapi-mongo-models').BaseModel,
    ObjectAssign = require('object-assign'),
    Promise               = require('promise');

var User = BaseModel.extend({
    constructor: function(attrs) {
        ObjectAssign(this, attrs);
    }
});



User._collection = 'users';

User.indexes = [
    [{ username: 1 }, { unique: true }],
    [{ email: 1 }, { unique: true }]
];


User.clean = function (user) {
    "use strict";
    delete user.hash;
    delete user.salt;
    if (user.verification) {
        delete user.verification.token;
    }

    if (user.providers) {
        delete user.providers;
    }

    return user;
};

User.create = function (data) {
    'use strict';
    var user = data;
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
module.exports = User;
