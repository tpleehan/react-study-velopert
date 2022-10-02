import React from "react";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import loadable from '@loadable/component';
const RedPage = loadable(() => import("./pages/RedPage"));
const BluePage = loadable(() => import("./pages/BluePage"));
const UsersPage = loadable(() => import("./pages/UsersPage"));

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
