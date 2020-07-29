import AWS from "aws-sdk";

// process.env is currently broken, I'm trying to fix it here:

// import { access, secret, bucket1, expiration } from '../config';
// console.log(`access: ${access} \n secret: ${secret} \n bucket: ${bucket1} \n expiration: ${expiration} \n `);

const access = process.env.REACT_APP_ACCESS_KEY;
const secret = process.env.REACT_APP_SECRET_ACCESS_KEY;
const bucket1 = process.env.REACT_APP_BUCKETNAME;
const expiration = 60 * 10;
console.log(`access: ${access} \n secret: ${secret} \n bucket: ${bucket1} \n expiration: ${expiration} \n `);

AWS.config.update(
    {
        accessKeyId: "AKIA6LE77AJ6EEIOQHGC",
        secretAccessKey: "AD6y5NulRc21qShYkOZFL+E21FhfqqtTWW6eD88R",
    }
);

const s3 = new AWS.S3();

// NOTE: testing and development purposes only
// TODO: replace with data from state 

const urlGenerator = (keyLookup) => {
    return s3.getSignedUrl('getObject', {
        Bucket: "soundspace-1",
        Key: keyLookup,
        Expires: expiration
    });
};

// export const urlGenerator = (keyLookup) => {
//     return s3.getSignedUrl('getObject', {
//         Bucket: bucket1,
//         Key: keyLookup,
//         Expires: expiration
//     });
// };

export default urlGenerator;