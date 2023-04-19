const { localConf } = require('./local.conf')
const { sauceConf } = require('./sauce.conf')

require('dotenv').config()

function getConfig(){
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
        case 'saucelabs':
            return sauceConf
    }
}

exports.config = getConfig()