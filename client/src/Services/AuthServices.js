import Axios from "axios"

//will return a promise
export const AuthenticateUser = (cred) => Axios.post("/api/users/login", cred);