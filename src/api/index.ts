import axios from "axios";
import { serverUrl } from "../config";

export const setApiToken = (token: string) => {
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete axios.defaults.headers.common["Authorization"];
};

export default axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
