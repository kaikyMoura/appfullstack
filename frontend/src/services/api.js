import axios, { Axios } from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5173",
});

export const createSession = async (email, password) => {
    return api.post("/sessions", {email, password});
}

export const getUsers = async () => {
    return api.get("/users");
}