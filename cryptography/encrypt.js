const crypto = require('crypto');

// this one should be used for data encryption
const encryptWithPublicKey = (publicKey, data) => {

    const dataBuffer = Buffer.from(data, 'utf-8');

    return crypto.publicEncrypt(publicKey, dataBuffer);

}


// this one should be used for user (identity) encryption
const encryptWithPrivateKey = (privateKey, data) => {

    const dataBuffer = Buffer.from(data, 'utf-8');

    return crypto.privateEncrypt(privateKey, dataBuffer);

}

module.exports.encryptWithPrivateKey = encryptWithPrivateKey;
module.exports.encryptWithPublicKey = encryptWithPublicKey;

/*
    **********************NOTES*************************
    - this functions encrypt data by using the node built-in crypto library.

    - it takes the data wanted to be encrypted and creates an ARRAY BUFFER, in order to use it when encrypting
    this data using crypto library.
*/