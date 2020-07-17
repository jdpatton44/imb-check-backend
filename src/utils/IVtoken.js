const dotenv = require('dotenv').config({ path: 'process.env' });
const axios = require('axios');


export default function ivToken() {
    console.log('Requesting Token from USPS.')
    const data = { 
        "username": process.env.IV_USER,
        "password": process.env.IV_PASS,
        "grant_type": "authorization",
        "response_type": "token",
        "scope": "user.info.ereg,iv1.apis",
        "client_id": process.env.IV_CLIENTID
        }

    var config = {
    method: 'post',
    url: 'https://services.usps.com/oauth/authenticate',
    headers: { 
        'Content-Type': 'application/json ', 
        'Cookie': 'NSC_tfswjdft-mc=ffffffff3b223ef445525d5f4f58455e445a4a42378b'
    },
    data : data
    };

    axios(config)
    .then((response) => {
        console.log(JSON.stringify(response.data.access_token).slice(1,-1))
        return JSON.stringify(response.data.access_token.slice(1,-1));
    })
    .catch( (error) => {
        return error;
    });
}