const dotenv = require('dotenv').config({ path: 'process.env' });
const axios = require('axios');


export default function singleIMB(token, imb) {
    console.log('Requesting IMB scans')
    console.log('with token: ', token)
    
    var config = {
        method: 'get',
        url: `https://iv.usps.com/ivws_api/informedvisapi/api/mt/get/piece/imb/${imb}`,
        headers: { 
            'Authorization': `Bearer ` + token.slice(1,-1), //remove quotes from token
            'Cookie': 'JSESSIONID=00001_D9Cs0TD4CFN_tb-4DPm0S:1bphc5hil; NSC_jw-qspe-dpn_443=ffffffff3b2236e345525d5f4f58455e445a4a4212d3'
        }
    };
    
    // request token with get request
    let scanData = axios(config)
        .then((response) => {
            console.log('IMB Scans Response: ', response);
            return(response.data)
        })
        .catch( (error) => {
            console.log('ERROR: ', error)
        }
    );
    
    return scanData;
}