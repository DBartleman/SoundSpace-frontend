import AWS from "aws-sdk";
import { access, secret, bucket1, expiration } from '../config';

AWS.config.update(
    {
        accessKeyId: access,
        secretAccessKey: secret,
    }
);

const s3 = new AWS.S3();

const urlGenerator = (keyLookup) => {
    return s3.getSignedUrl('getObject', {
        Bucket: bucket1,
        Key: keyLookup,
        Expires: expiration
    });
};

export default urlGenerator;