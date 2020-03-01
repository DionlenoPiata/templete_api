global.SALT_KEY = 'dv376234-3762-ssj3-dd82-j967gh38202dk';

module.exports = {

    titleApplication: 'gerador de APIs',
    versionApplication: '1.00',

    port: '3000',

    conectionString: 'mongodb://localhost:27017/nodestore',

    tokenExpiresIn: '1w', // 1d, 1w, ...
    headersNameToken: 'x-access-token',
}