const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT,
        dbURL: process.env.DB_URL,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];