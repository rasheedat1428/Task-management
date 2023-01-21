import axios from "axios";

const SERVER_URL = 'http://localhost:6500';

export const loginService = (userDetails) => {
return axios.post(`${SERVER_URL}/users/login`, userDetails, {
   
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});
};

export const fetchUserProfile = () => {
  return axios.get(`${SERVER_URL}/users/profile`, {
   
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
})
};

export const fetchUserTasks = () => {
  return axios.get(`${SERVER_URL}/tasks`,{
   
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
})
}