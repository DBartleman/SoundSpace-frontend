// old system, phasing out
export const imageUrl =
    process.env.REACT_APP_IMAGE_URL || "http://localhost:5000";
export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}/api`;

// new system
export const API = process.env.REACT_APP_IMAGE_URL || "http://localhost:5000";

export const ACCESS_KEY = process.env.ACCESS_KEY;
export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
