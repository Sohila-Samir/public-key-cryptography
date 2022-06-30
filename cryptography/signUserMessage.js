const fs = require('fs')
const crypto = require('crypto');
const hashFunction = crypto.createHash('sha256');
const { encryptWithPrivateKey } = require('./encrypt.js');


const privateKey = fs.readFileSync(__dirname + '/PRV_KEY.pem', 'utf-8');

const myData = {
    name: 'sto',
    age: '20'
}

const myDataString = JSON.stringify(myData);

hashFunction.update(myDataString);
const hashedData = hashFunction.digest('hex')

const encryptedData = encryptWithPrivateKey(privateKey, hashedData)

const dataToBeTransmitted = {
    algorithm: 'sha256',
    originalData: myData,
    signedAndEncryptedData: encryptedData
}

module.exports.dataToBeTransmitted = dataToBeTransmitted;

/*
                            **********************NOTES*************************
    - this module is implements a user encryption flow by using the node built-in crypto library to:
    1. create a hash function (TrapDoor function) with empty content in it.

    2. require the private that will be used for encrypting user data.

    3. require the User encryption method that will encrypt the user data using private key.

    *4. in order to update the content of a hash function i need to STRINGIFY the data OBJECT that will be TRANSMITTED.

    5. update the hash function content with the STRINGIFIED DATA.

    6. convert this updated hashed content to HEX.

    7. now use the encryption function passing in the private key and THE HEX HASHED DATA.

    *8. one last thing that i need to consider is when sending back A USER DATA the receiver should know THE ALGORITHM that
    was used for creating the cash and the very original non-stringified data in order for the receiver to make sure that not only
    that the data wasn't tempered with but also that the issuer who signed the data is real issuer. and lastly include the encrypted
    data.

*/