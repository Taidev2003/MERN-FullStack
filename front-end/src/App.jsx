import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import routes from "./Routes/index.js";
import { useQuery } from "@tanstack/react-query";
import DefaultPage from "./Components/DefaultComponents/DefaultComponents.jsx";
import { Fragment } from "react";

function App() {
  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  // const fetchAPI = async () => {
  //   const res = await axios.get(
  //     `${process.env.REACT_APP_API_URL}/product/get-all`
  //   );
  //   return res.data;
  // };
  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchAPI });
  // console.log(query);
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
