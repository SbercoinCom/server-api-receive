const bitcore = require('sbercoincore-lib');

class Address {

    static isValid(address, network) {
        return bitcore.Address.isValid(address, network);
    }

}

module.exports = Address;