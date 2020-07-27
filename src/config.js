
// old system, phasing out
export const imageUrl =
    process.env.REACT_APP_IMAGE_URL || "http://localhost:5000";
export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}/api`;

// new system
export const API = process.env.REACT_APP_IMAGE_URL || "http://localhost:5000";

export const access = process.env.REACT_APP_ACCESS_KEY;
export const secret = process.env.REACT_APP_SECRET_ACCESS_KEY;
export const bucket1 = process.env.REACT_APP_BUCKETNAME;
export const expiration = 60*10;
