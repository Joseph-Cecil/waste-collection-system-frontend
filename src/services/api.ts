import axios from "axios";

const baseUrl = "https://waste-management-api-tu9g.onrender.com/api";
// const baseUrl = "http://127.0.0.1:8000/api";
const registerUrl = `${baseUrl}/auth/register/`;
const loginUrl = `${baseUrl}/auth/login/`;
const logoutUrl = `${baseUrl}/auth/logout/`;
const profileUrl = `${baseUrl}/auth/me/`
const trashUrl = `${baseUrl}/trash/`;

const register = async (credential: { email: string; username: string; password: string }) => {
    try {
        const response = await axios.post(registerUrl, credential);
        console.log("Registration response:", response);
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};

const login = async (credential: { email: string; password: string }) => {
    try {
        const response = await axios.post(loginUrl, credential);
        const tokens = response.data.tokens;

        if (tokens && tokens.access && tokens.refresh) {
            localStorage.setItem('jwtToken', tokens.access);
            localStorage.setItem('refreshToken', tokens.refresh);
        } else {
            throw new Error("Invalid token structure in response");
        }

        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

const logout = async () => {
    const refresh_token = localStorage.getItem('refreshToken');
    console.log("Refresh token:", refresh_token);

    if (refresh_token) {
        const access_token = localStorage.getItem('jwtToken');
        console.log("Inside the logout function");

        if (access_token) {
            const config = {
                headers: { Authorization: `Bearer ${access_token}` },
            };
            try {
                await axios.post(logoutUrl, { refresh: refresh_token }, config);
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('jwtToken');
                console.log("Logout successful and tokens removed");
            } catch (error) {
                console.error("Logout failed:", error);
                throw error;
            }
        }
    } else {
        console.log("No refresh token found");
    }
};

const orderTrashTakeOut = async (newObject: {
    contact: string;
    location: string;
    take_out_date: string;
}) => {
    const access_token = localStorage.getItem('jwtToken');
    console.log(access_token);

    if (access_token) {
        const config = {
            headers: { Authorization: `Bearer ${access_token}` },
        };

        try {
            const response = await axios.post(trashUrl, newObject, config);
            console.log("Order response:", response);
            return response.data;
        } catch (error) {
            console.error("Order failed:", error);
            throw error;
        }
    } else {
        console.error("No access token found");
        throw new Error("No access token found");
    }
};


const getAllTrashOrder = async () => {
    const access_token = localStorage.getItem('jwtToken');
    console.log(access_token);

    if (access_token) {
        const config = {
            headers: { Authorization: `Bearer ${access_token}` },
        };

        try {
            const response = await axios.get(trashUrl, config);
            console.log("Order response:", response);
            return response.data;
        } catch (error) {
            console.error("Order failed:", error);
            throw error;
        }
    } else {
        console.error("No access token found");
        throw new Error("No access token found");
    }
};


const getUserProfile = async () => {
    const access_token = localStorage.getItem('jwtToken');
    console.log(access_token);

    if (access_token) {
        const config = {
            headers: { Authorization: `Bearer ${access_token}` },
        };

        try {
            const response = await axios.get(profileUrl, config);
            console.log("Order response:", response);
            return response.data;
        } catch (error) {
            console.error("Order failed:", error);
            throw error;
        }
    } else {
        console.error("No access token found");
        throw new Error("No access token found");
    }
};


const deleteTrash = async (id:string) => {
    const access_token = localStorage.getItem('jwtToken');
    console.log(access_token);

    if (access_token) {
        const config = {
            headers: { Authorization: `Bearer ${access_token}` },
        };

        try {
            const response = await axios.delete(`${trashUrl}${id}`, config);
            console.log("Order response:", response);
            return response.data;
        } catch (error) {
            console.error("Order failed:", error);
            throw error;
        }
    } else {
        console.error("No access token found");
        throw new Error("No access token found");
    }
};


export default { register, login, logout, orderTrashTakeOut, getAllTrashOrder, getUserProfile, deleteTrash };
