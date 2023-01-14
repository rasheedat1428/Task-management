const SERVER_URL = 'http://localhost:6500';

export const loginService = (userDetails) => {
return fetch(`${SERVER_URL}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control": "Allow-Origin"
    },
    body: JSON.stringify(userDetails)
});
}
/*export const registerService = () => {
    return fetch(`${SERVER_URL}/users/register`, {
    method: "GET",
    headers: {

    }    
    });
}; */