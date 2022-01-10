import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZAb6cBARTVPHosDPb4sZt2uWpQcQ0ThZ-xt3FxDWiqg",
  },
});

