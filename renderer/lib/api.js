export const LOGIN_URL = "https://backend-for-drawing-school.vercel.app";
export const AUTH_LOGIN_API = "https://backend-for-drawing-school.vercel.app/api/auth/login";

export const setServerIpAddress = (ip) => {
  if (typeof window !== "undefined") {
    window.serverIpAddress = ip;
    localStorage.setItem("serverIpAddress", ip);
  }
};

export const getServerIpAddress = () => {
  if (typeof window !== "undefined") {
    return window.serverIpAddress || localStorage.getItem("serverIpAddress");
  }
  return null;
};

export const fetchApi = async (path, options = {}) => {
  const localhostUrl = `http://localhost:49215/api${path}`;
  console.log(localhostUrl ,"path" ,path)
  try {
    // Attempt to connect to localhost first
    const res = await fetch(localhostUrl, options);
    return res;
  } catch (error) {
    // If localhost fails (e.g. network error, connection refused), fallback to the local IP
    const ip = getServerIpAddress();
    if (ip) {
      console.warn(`Localhost failed. Falling back to IP: ${ip}`);
      return fetch(`http://${ip}${path}`, options);
    }
    console.log(error)
    throw error;
  }
};
