const TESTING = true;

const LOCAL_URL = "http://localhost:3000/api"
const PROD_URL = "https://sdev255-teambatman-backend.onrender.com/api"

export const API_BASE_URL = TESTING ? LOCAL_URL : PROD_URL;