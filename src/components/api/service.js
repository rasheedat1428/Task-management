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

export const registerService = (userDetails) => {
  return axios.post(`${SERVER_URL}/users/register`, userDetails, {
     
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
  });
  };
  

export const fetchUserProfile = () => {
  const auth = getAuthToken();
  return axios.get(`${SERVER_URL}/users/profile`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${auth?.type} ${auth?.token}`,
    },
})
};

export const fetchUserTasks = () => {
  const auth = getAuthToken();
  return axios.get(`${SERVER_URL}/tasks`,{
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${auth?.type} ${auth?.token}`,
    },
})
};

const getAuthToken = () => {
  let tokenAuth = {};
  const auth = localStorage.getItem("auth");
  if (auth) {
    tokenAuth = JSON.parse(auth);
  }

  return tokenAuth;
}