import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./Routes/index.js";

import DefaultPage from "./Components/DefaultComponents/DefaultComponents.jsx";
import { Fragment } from "react";

function App() {
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
