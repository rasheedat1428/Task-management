import axios from "axios";

const SERVER_URL = 'http://localhost:6500';

export const loginService = (userDetails) => {
return axios.post(`${SERVER_URL}/users/login`, userDetails, {
   
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});
}
