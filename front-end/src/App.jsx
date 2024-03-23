import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./Routes/index.js";
import * as UserService from "./services/UserService.js";
import DefaultPage from "./Components/DefaultComponents/DefaultComponents.jsx";
import { Fragment, useEffect } from "react";
import { isJsonString } from "./utils.js";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { UpdateUser } from "./redux/Slice/UserSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecode();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, []);

  const handleDecode = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecode();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    (error) => {
      return new Promise.reject(error);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(UpdateUser({ ...res?.data, access_token: token }));
  };
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultPage : Fragment;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                key={route.path}
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 