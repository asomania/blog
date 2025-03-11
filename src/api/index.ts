import axios from "axios";

// API URL'ini çevresel değişkenle almak, farklı ortamlarda kullanılabilir.
const api = axios.create({
  baseURL: "http://localhost:1330/api", // .env'den al, yoksa varsayılan localhost
  headers: {
    "Content-Type": "application/json",
    // Diğer özel başlıklar eklenebilir
  },
  withCredentials: true, // Eğer kimlik doğrulama gerektiriyorsa
});

export default api;
