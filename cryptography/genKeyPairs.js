const crypto = require('crypto');
const fs = require('fs')

const genKeyPairs = (() => {
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    })
    fs.writeFileSync(__dirname + '/PUB_KEY.pem', keyPair.publicKey);
    fs.writeFileSync(__dirname + '/PRV_KEY.pem', keyPair.privateKey);
})()


module.exports = genKeyPairs

/*
    **********************NOTES*************************
    - if i want to protect DATA i should ENCRYPT using PUBLIC KEY & DECRYPT using PRIVATE KEY
    - if i want to protect IDENTITY i should ENCRYPT using PRIVATE KEY & DECRYPT using PUBLIC KEY
*/