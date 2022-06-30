const fs = require('fs')
const { encryptWithPublicKey } = require('./encrypt.js');
const { decryptWithPrivateKey } = require('./decrypt.js');

const publicKey = fs.readFileSync(__dirname + '/PUB_KEY.pem', 'utf-8');
const privateKey = fs.readFileSync(__dirname + '/PRV_KEY.pem', 'utf-8');

/*
    - this will call encryption function that will return me an array Buffer.

    - if i tried to convert it into a string it should return a gibberish data.

    - this is what i am supposed to transfer over a secure transport layer.

    - to DECRYPT the data, i can do that using the private key that i have generated before.
    and that's by implementing a DECRYPT function that's very similar to the (encryptWithPublicKey) function but
    with only difference using PRIVATE KEY instead of PUBLIC KEY.
*/
const encryptedData = encryptWithPublicKey(publicKey, 'this is a very secret data!')
const decryptedData = decryptWithPrivateKey(privateKey, encryptedData)

// console.log(`Encrypted Data: ${encryptedData.toString()}`);
// console.log(`Decrypted Data: ${decryptedData.toString()}`);
