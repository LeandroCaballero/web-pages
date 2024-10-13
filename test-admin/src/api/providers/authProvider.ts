import { AuthProvider, HttpError, fetchUtils } from "react-admin";
import { BACKEND_ENDPOINT } from "../../utils";
import { jwtDecode } from "jwt-decode";

const isTokenValid = (token: string) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    console.log(decodedToken);

    if (decodedToken.exp) return decodedToken?.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const res = await fetchUtils.fetchJson(`${BACKEND_ENDPOINT}/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
    });

    if (res.status === 201 && res.body) {
      let { name, token, id } = JSON.parse(res.body);
      localStorage.setItem("user", JSON.stringify({ name, token, id }));
      return Promise.resolve();
    }

    return Promise.reject(
      new HttpError("Unauthorized", 401, {
        message: "Invalid username or password",
      }),
    );
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    const user = localStorage.getItem("user");
    if (!user) return Promise.reject();
    const expiredToken = isTokenValid(JSON.parse(user).token);

    return !expiredToken ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
