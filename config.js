const env = process.env;

export default {
    mongodbUri: 'mongodb://localhost:27017/test',
    port: env.PORT || 8082,
    host: env.HOST || '0.0.0.0',
    get serverURL() {
        return 'http://' + this.host + ':' + this.port;
    }
};

// we can also export other objects beside the default object




export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};