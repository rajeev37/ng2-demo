'use strict';

var Config = require('config'),
    Path = require('path');

module.exports = {
    server: {},

    connections: [
        {labels: ['web'], host: Config.server.host, port: Config.server.port}
    ],
    registrations: [
        {
            plugin: {
                register: 'inert'
            }
        },
        {
            plugin: {
                register: './plugins/assets',

                options: {
                    assetsDir: Path.join(__dirname, '..', '..', 'bundle')
                }
            }
        },
        {
            plugin: {
                register: 'vision'
            }
        },
        {
            plugin: {
                register: 'visionary',
                options: {
                    engines: {
                        html: require('handlebars')
                    },

                    path: Path.join(__dirname, '../../bundle')
                }
            }
        },
        {
            plugin: {
                register: './plugins/hapi-mongo-models',
                options: {
                    mongodb     : Config.db,
                    autoIndex   : false,
                    models      : require('./models/index')
                }
            }
        },
        {
            plugin: {
                register: './plugins/router',
                options: {
                    cwd: __dirname,
                    routes: 'controllers/**/*.js'
                }
            }
        },
        {
            plugin: {
                register: 'good',
                options: {
                    opsInterval: 5000,
                    reporters: [{
                        reporter: 'good-console',
                        events: {response: '*', log: '*', error: '*'} //"ops": "*",
                    }]
                }
            }
        },
        {
            plugin: {
                register: 'blipp',
                options: {}
            }
        }


    ]
}
