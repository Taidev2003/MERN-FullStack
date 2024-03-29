import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/users/sign-in`,
    data
  );
  return res.data;
};

export const signupUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/users/sign-up`,
    data
  );
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/users/get-details/${id}`,
    {
      headers: {
        token: `Beare ${access_token}`,
      },
    }
  );
  return res.data;
};
export const refreshToken = async () => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/users/refresh-token`,
    { withCredentials: true }
  );
  return res.data;
};
export const logoutUser = async () => {
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_API_URL}/users/log-out`
  );
  return res.data;
};
