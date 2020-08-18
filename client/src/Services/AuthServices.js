import Axios from "axios"

//will return a promise
export const AuthenticateUser = (cred) => Axios.post("/api/users/login", cred);

export const LogoutUser = () => Axios.post("/api/users/logout");


export const RegisterUser = data => Axios.post("/api/users/new", data);

//to avoid the user logout on refresh
export const GetActiveUser = () => Axios.get("/api/users/login");