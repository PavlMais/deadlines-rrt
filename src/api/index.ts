import axios from "axios";
import { serverUrl } from "../config";

export const setApiToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem('jwt-token', token)
  }
  else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem('jwt-token')
  }
};

export default axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
