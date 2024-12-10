import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5232/api",
  headers: {
    "Content-Type": "application/json",
  },
});
