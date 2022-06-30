const crypto = require('crypto');
const fs = require('fs')
const { decryptWithPublicKey } = require('./decrypt.js');
const { dataToBeTransmitted: receivedData } = require('./signUserMessage');

const publicKey = fs.readFileSync(__dirname + '/PUB_KEY.pem', 'utf-8');

const hash = crypto.createHash(receivedData.algorithm);

hash.update(JSON.stringify(receivedData.originalData))
const hashOfOriginalHex = hash.digest('hex')
const decryptedUserData = decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData)

const decryptedUserDataHex = decryptedUserData.toString()

if (hashOfOriginalHex === decryptedUserDataHex) {
    console.log('congrats! the data has not been tempered with');
    console.log(`here's your data: ${decryptedUserDataHex}`);
} else {
    console.log('uh oh...looks like data has been tempered with.');
}