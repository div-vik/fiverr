import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-server-6o7v.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
