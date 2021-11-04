var config = {
    development: {
        url: 'http://my.site.com',
        database: {
            host:   'localhost',
            port:   3306,
            db:     'delivery',
            username: 'root',
            password: 'root'
        }
    },
    production: {
        url: 'http://my.site.com',
        database: {
            host:   'localhost',
            port:   3030,
            db:     'delivery',
            username: 'root',
            password: 'root'
        }
    }
    }; 
    module.exports = config;