import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api/?inc=name,email,picture,location,gender,phone,id",
});

export default api;