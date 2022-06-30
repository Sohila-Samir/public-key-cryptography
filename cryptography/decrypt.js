const fs = require('fs');
const crypto = require('crypto');

// this one should be used for data decryption
const decryptWithPrivateKey = (privateKey, data) => {

    return crypto.privateDecrypt(privateKey, data);

}


// this one should be used for user (identity) decryption
const decryptWithPublicKey = (publicKey, data) => {

    return crypto.publicDecrypt(publicKey, data);

}

module.exports.decryptWithPublicKey = decryptWithPublicKey;
module.exports.decryptWithPrivateKey = decryptWithPrivateKey;

/*
    **********************NOTES*************************
    - this function decrypt data by using the node built-in crypto library.

    - it takes the DATA BUFFER wanted to be DECRYPTED and THE PRIVATE KEY or PUBLIC KEY in order to use it for decryption
*/