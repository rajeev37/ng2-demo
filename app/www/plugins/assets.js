'use strict';
var FS = require('fs'),
    Hoek = require('hoek'),
    Path = require('path'),
    Util = require('util');

exports.register = function (server, options, next) {
    console.log('ssssssssssssssssssssssss', options);

    Hoek.assert(options.assetsDir, 'Missing path for assetsDir');
    if (options.ignoreFiles) {
        Hoek.assert(Util.isArray(options.ignoreFiles), 'Missing path for ignoreFiles must be an array');
    }

    var settings = Hoek.clone(options),
        routes = [];

    FS.exists(settings.assetsDir, function (exists) {

        if (exists) {

            FS
                .readdirSync(settings.assetsDir)
                .filter(function (file) {
                    if (settings.ignoreFiles) {
                        return settings.ignoreFiles.indexOf(file) < 0;
                    }
                    return true;
                })
                .forEach(function (file) {
                    var filePath = Path.join(settings.assetsDir, file),
                        stat = FS.statSync(filePath);

                    if (stat.isDirectory()) {
                        routes.push({
                            path: '/' + file + '/{path*}',
                            method: 'GET',
                            handler: {
                                directory: {
                                    path: filePath,
                                    lookupCompressed: true
                                }
                            }

                        });

                    } else if (stat.isFile()) {
                        routes.push({
                            path: '/' + file,
                            method: 'GET',
                            handler: {
                                file: {
                                    path: filePath,
                                    lookupCompressed: true
                                }
                            }

                        });

                    }


                });

            server.route(routes);
        } else {
            console.warn('Unable to find assets dir: ', settings.assetsDir)
        }
    });


    next();
};

exports.register.attributes = {
    name: 'hapi-assets'
};
