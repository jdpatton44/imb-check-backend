const dotenv = require('dotenv').config({ path: 'process.env' });
const axios = require('axios');


export default function singleIMB(token, imb) {
        console.log('received token, requesting IMB scans')
    var config = {
        method: 'get',
        url: `https://iv.usps.com/ivws_api/informedvisapi/mt/get/piece/imb/${imb}`,
        headers: { 
            'Authorization': `Bearer ` + token.slice(1,-1)
        }
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify('IMB Scans Response: ', response.data));
        return(res)
    })
    .catch(function (error) {
        console.log('ERROR: ', error)
        return error;
    });
    
}